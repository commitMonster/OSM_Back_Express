import * as BasketRepository from '../repositorys/BasketRepository';
import * as ProductRepository from '../repositorys/ProductRepository';

export const deleteBasket = async basketId => {
  try {
    const currentBasket = await BasketRepository.findById(basketId);
    const currentProduct = await ProductRepository.findById(currentBasket.productId);

    const productCount = currentBasket.count + currentProduct.count;
    const updateProduct = await ProductRepository.updateCountById(currentProduct.id, productCount);
    console.log(updateProduct);

    await BasketRepository.deleteById(basketId);
  } catch (err) {
    console.error(err);
  }
};
