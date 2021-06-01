import * as ProductRepository from '../repositorys/ProductRepository';
import * as ReviewRepository from '../repositorys/ReviewRepository';

export const findReview = async (req, res, next) => {
  try {
    const reviewList = await ReviewRepository.findByProductId(Number(req.params.id));
    return res.send(reviewList);
  } catch (err) {
    console.error(err);
    next(err);
  }
};

export const create = async (req, res, next) => {
  try {
    const data = req.body;
    data.userId = req.user.id;
    const review = await ReviewRepository.create(data);

    const count = await ReviewRepository.countAll();
    const product = await ProductRepository.findById(data.productId);

    console.log(count, product);
    const updatedScore = (product.score * (count - 1) + data.score) / count;

    await ProductRepository.updateScoreById(data.productId, updatedScore);

    return res.send(review);
  } catch (err) {
    console.error(err);
    next(err);
  }
};
