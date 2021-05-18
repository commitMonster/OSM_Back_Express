import bcrypt from 'bcrypt';
import * as UserRepository from '../repositorys/UserRepository';

const isUserExist = user => {
  if (user) {
    return true;
  } else {
    return false;
  }
};

export const signup = async (req, res, next) => {
  try {
    req.body.password = await bcrypt.hash(req.body.password, 10);
    const user = await UserRepository.create(req.body);
    if (user) {
      return res.send({ message: '회원 가입 성공' });
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
