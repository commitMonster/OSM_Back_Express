import bcrypt from 'bcrypt';
import * as UserRepository from '../repositorys/UserRepository';

export const join = async (req, res, next) => {
  try {
    req.body.password = await bcrypt.hash(req.body.password, 10);
    const user = await UserRepository.create(req.body);
    if (user) {
      res.send({ message: '회원 가입 성공' });
    } else {
      throw new Error('알 수 없는 에러 발생');
    }
  } catch (err) {
    console.error(err);
    next(err);
  }
};

export const isIdDuplicated = async (req, res, next) => {
  try {
    const user = await UserRepository.findByUserId(req.body.userId);
    if (user) {
      res.send({ isIdDuplicated: true });
    } else {
      res.send({ isIdDuplicated: false });
    }
  } catch (err) {
    console.error(err);
    next(err);
  }
};
