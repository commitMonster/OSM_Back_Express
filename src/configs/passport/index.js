import { UserRepository } from '../../repositorys/UserRepository';
import localStrategy from './LocalStrategy';

const userRepository = new UserRepository();

export default passport => {
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });
  passport.deserializeUser(async (id, done) => {
    try {
      const findUser = await userRepository.findById(id);
      if (!findUser) done(new Error({ message: 'Wrong User Id' }));
      done(null, findUser);
    } catch (err) {
      done(err);
    }
  });
  localStrategy(passport);
};
