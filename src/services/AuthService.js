import bcrypt from 'bcrypt';
import { UserRepository } from '../repositorys/UserRepository';

const userRepository = new UserRepository();

export class AuthService {
  async join(req, res, next) {
    try {
      req.body.password = await bcrypt.hash(req.body.password, 10);
      const user = await userRepository.create(req.body);
      res.send(user);
    } catch (err) {
      console.error(err);
      next(err);
    }
  }
}
