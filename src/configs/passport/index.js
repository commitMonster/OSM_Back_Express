import { PrismaClient } from '@prisma/client';
import localStrategy from './LocalStrategy';

const prisma = new PrismaClient();

export default passport => {
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });
  passport.deserializeUser(async (id, done) => {
    try {
      const findUser = await prisma.user.findUnique({ where: { id } });
      done(null, findUser);
    } catch (err) {
      done(err);
    }
  });
  localStrategy(passport);
};
