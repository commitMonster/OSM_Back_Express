import bcrypt from 'bcrypt';
import passportLocal from 'passport-local';
import { UserRepository } from '../../repositorys/UserRepository';

const LocalStrategy = passportLocal.Strategy;
const userRepository = new UserRepository();

export default passport => {
  passport.use(
    new LocalStrategy(
      {
        usernameField: 'userId', //req.body.id
        passwordField: 'password', //req.body.password
        session: true, // 세션에 저장 여부
      },
      async (userId, password, cb) => {
        try {
          const findUser = await userRepository.findByUserId(userId);
          if (!findUser) {
            return cb(null, false);
          }
          const result = await bcrypt.compare(password, findUser.password);
          if (!result) {
            return cb(null, false);
          }
          return cb(null, findUser);
        } catch (err) {
          return cb(err);
        }
      }
    )
  );
};
