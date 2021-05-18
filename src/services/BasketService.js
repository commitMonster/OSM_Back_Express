import * as BasketRepository from '../repositorys/BasketRepository';
import * as ProductRepository from '../repositorys/ProductRepository';

export const create = async (req, res, next) => {
  try {
    const data = req.body;
    const product = await ProductRepository.findById(data.productId);
    if (product === null || product.isDeleted) {
      return res.send({
        status: false,
        message: '해당 상품은 없습니다.',
      });
    } else if (data.count > product.count) {
      return res.send({
        status: false,
        message: '상품의 수량이 부족합니다.',
      });
    }
    const curruntBasket = await BasketRepository.findByUserIdAndProductId(req.user.id, data.productId);
    if (curruntBasket.length) {
      const numberOfProductsWantToBuy = data.count + curruntBasket[0].count;
      if (product.count < numberOfProductsWantToBuy) {
        return res.send({
          status: false,
          message: '상품의 수량이 부족합니다.',
        });
      }
      const addCountBasket = await BasketRepository.updateByIdAndCount(curruntBasket[0].id, numberOfProductsWantToBuy);
      return res.send(addCountBasket);
    } else {
      data.userId = req.user.id;
      const basket = await BasketRepository.create(data);
      return res.send(basket);
    }
  } catch (err) {
    console.error(err);
    next(err);
  }
};

export const findAll = async (req, res, next) => {
  try {
    const basketList = await BasketRepository.findAll();
    return res.send(basketList);
  } catch (err) {
    console.error(err);
    next(err);
  }
};

export const updateById = async (req, res, next) => {
  try {
    const product = await ProductRepository.findById(Number(req.params.id));
    if (req.body.count > product.count) {
      return res.send({
        status: false,
        message: '상품의 수량이 부족합니다.',
      });
    }
    const updateProduct = await BasketRepository.updateByIdAndCount(Number(req.params.id), req.body.count);
    return res.send(updateProduct);
  } catch (err) {
    console.error(err);
    next(err);
  }
};

export const deleteById = async (req, res, next) => {
  try {
    await BasketRepository.deleteById(Number(req.params.id));
    return res.send({ message: '삭제 성공' });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

export const deleteAll = async (req, res, next) => {
  try {
    await BasketRepository.deleteMany(req.user.id);
    return res.send({ message: '삭제 성공' });
  } catch (err) {
    console.error(err);
    next(err);
  }
};
