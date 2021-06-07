import * as BasketRepository from '../repositorys/BasketRepository';
import * as ProductRepository from '../repositorys/ProductRepository';
import { deleteBasket } from '../utils/DeleteBasket';

export const create = async (req, res, next) => {
  try {
    const data = req.body;
    const product = await ProductRepository.findById(data.productId);
    if (product === null || product.isDeleted) {
      return res.send({
        status: false,
        message: '해당 상품은 없습니다.',
      });
    } else if (data.count > product.stock) {
      return res.send({
        status: false,
        message: '상품의 수량이 부족합니다.',
      });
    }
    const curruntBasket = await BasketRepository.findByUserIdAndProductId(req.user.id, data.productId);
    if (curruntBasket.length) {
      const numberOfProductsWantToBuy = data.count + curruntBasket[0].count;
      if (product.stock < data.count) {
        return res.send({
          status: false,
          message: '상품의 수량이 부족합니다.',
        });
      }
      const addCountBasket = await BasketRepository.updateByIdAndCount(curruntBasket[0].id, numberOfProductsWantToBuy);
      const updateProduct = await ProductRepository.updateCountById(data.productId, product.stock - data.count);
      console.log(updateProduct);
      return res.send(addCountBasket);
    } else {
      data.userId = req.user.id;
      const basket = await BasketRepository.create(data);
      const updateProduct = await ProductRepository.updateCountById(data.productId, product.stock - data.count);
      console.log(updateProduct);
      return res.send(basket);
    }
  } catch (err) {
    console.error(err);
    next(err);
  }
};

export const once = async (req, res, next) => {
  try {
    const data = req.body;
    const product = await ProductRepository.findById(data.productId);
    if (product === null || product.isDeleted) {
      return res.send({
        status: false,
        message: '해당 상품은 없습니다.',
      });
    } else if (data.count > product.stock) {
      return res.send({
        status: false,
        message: '상품의 수량이 부족합니다.',
      });
    }

    data.userId = req.user.id;
    const basket = await BasketRepository.create(data);
    const updateProduct = await ProductRepository.updateCountById(data.productId, product.stock - data.count);
    console.log(updateProduct);
    return res.send(basket);
  } catch (err) {
    console.error(err);
    next(err);
  }
};

export const findAll = async (req, res, next) => {
  try {
    const basketList = await BasketRepository.findAllByUserId(req.user.id);
    basketList.map(basket => {
      basket.product.image = basket.product.image.split(',');
    });
    return res.send(basketList);
  } catch (err) {
    console.error(err);
    next(err);
  }
};

export const updateById = async (req, res, next) => {
  try {
    const product = await ProductRepository.findById(req.body.productId);
    if (req.body.count > product.stock) {
      return res.send({
        status: false,
        message: '상품의 수량이 부족합니다.',
      });
    }
    const currentBasket = await BasketRepository.findById(Number(req.params.id));
    const updateBasket = await BasketRepository.updateByIdAndCount(Number(req.params.id), req.body.count);

    const productCount = product.stock + currentBasket.count - updateBasket.count;
    console.log(productCount);
    await ProductRepository.updateCountById(req.body.productId, productCount);
    return res.send(updateBasket);
  } catch (err) {
    console.error(err);
    next(err);
  }
};

export const deleteById = async (req, res, next) => {
  try {
    await deleteBasket(Number(req.params.id));
    return res.send({ message: '삭제 성공' });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

export const deleteAll = async (req, res, next) => {
  try {
    const basketList = await BasketRepository.findAllByUserId(req.user.id);

    for await (const basket of basketList) {
      await deleteBasket(basket.id);
    }

    return res.send({ message: '삭제 성공' });
  } catch (err) {
    console.error(err);
    next(err);
  }
};
