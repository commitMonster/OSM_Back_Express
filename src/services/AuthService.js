import bcrypt from 'bcrypt';
import _ from 'lodash';
import * as BasketRepository from '../repositorys/BasketRepository';
import * as UserRepository from '../repositorys/UserRepository';

export const find = async (req, res, next) => {
  try {
    const count = await BasketRepository.count(req.user.id);
    res.send({ user: req.user, count });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

const isUserExist = user => {
  if (user) {
    return true;
  } else {
    return false;
  }
};

export const signup = async (req, res, next) => {
  try {
    const data = _.cloneDeep(req.body);
    data.password = await bcrypt.hash(data.password, 10);
    const user = await UserRepository.create(data);
    if (user) {
      next();
    } else {
      throw new Error('알 수 없는 에러 발생');
    }
  } catch (err) {
    console.error(err);
    next(err);
  }
};

export const isDuplicated = async (req, res, next) => {
  try {
    if (req.params.type === 'userId') {
      const user = await UserRepository.findByUserId(req.body.userId);
      return res.send({ isDuplicated: isUserExist(user) });
    } else if (req.params.type === 'email') {
      const user = await UserRepository.findByEmail(req.body.email);
      return res.send({ isDuplicated: isUserExist(user) });
    } else {
      return res.send({ isDuplicated: false });
    }
  } catch (err) {
    console.error(err);
    next(err);
  }
};
