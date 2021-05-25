import * as BasketRepository from '../repositorys/BasketRepository';

export const find = async (req, res, next) => {
  try {
    const count = await BasketRepository.count(req.user.id);
    res.send({ user: req.user, count });
  } catch (err) {
    console.error(err);
    next(err);
  }
};
