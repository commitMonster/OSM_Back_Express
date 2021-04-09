import passport from 'passport';

export class AuthHelper {
  login(req, res, next) {
    passport.authenticate('local', (err, user) => {
      if (err) {
        console.error(err);
        return next(err);
      }
      if (!user) {
        return res.status(401).send({ Error: '해당 유저 정보가 없습니다.' });
      }
      return req.login(user, loginError => {
        if (loginError) {
          console.error(loginError);
          return res.status(500).send({ Error: '로그인에 실패했습니다.' });
        }
        res.send();
      });
    })(req, res, next);
  }
  logout(req, res, next) {
    req.logout();
    req.session.destroy(err => {
      if (err) {
        console.error(err);
        next(err);
      } else {
        res.clearCookie('connect.sid');
        res.redirect('/');
      }
    });
  }
  isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
      next();
    } else {
      res.status(403).send('잘못된 접근입니다.');
    }
  }
  isNotLoggedIn(req, res, next) {
    if (!req.isAuthenticated()) {
      next();
    } else {
      res.status(403).send('잘못된 접근입니다.');
    }
  }
}
