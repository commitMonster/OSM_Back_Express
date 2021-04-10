import bcrypt from 'bcrypt';
import * as UserRepository from '../repositorys/UserRepository';

export const join = async (req, res, next) => {
  try {
    req.body.password = await bcrypt.hash(req.body.password, 10);
    const user = await UserRepository.create(req.body);
    res.send(user);
  } catch (err) {
    console.error(err);
    next(err);
  }
};

export const isIdDuplicated = async (req, res, next) => {
  try {
    const user = await UserRepository.findByUserId(req.body.userId);
    if (user) res.send({ isIdDuplicated: true });
    else res.send({ isIdDuplicated: false });
  } catch (err) {
    console.error(err);
    next(err);
  }
};
