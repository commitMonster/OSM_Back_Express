import passport from 'passport';

export const signin = (req, res, next) => {
  passport.authenticate('local', (err, user) => {
    if (err) {
      console.error(err);
      return next(err);
    }
    if (!user) {
      return res.status(401).send({ message: '해당 유저 정보가 없습니다.' });
    }
    return req.login(user, loginError => {
      if (loginError) {
        console.error(loginError);
        return res.status(500).send({ message: '로그인에 실패했습니다.' });
      }
      if (user.isAdmin) {
        return res.send({ isAdmin: true, name: user.name });
      } else {
        return res.send({ isAdmin: false, name: user.name });
      }
    });
  })(req, res, next);
};

export const signout = (req, res, next) => {
  req.logout();
  req.session.destroy(err => {
    if (err) {
      console.error(err);
      next(err);
    } else {
      res.clearCookie('connect.sid');
      return res.send({ message: '로그아웃 성공' });
    }
  });
};

export const isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.status(403).send({ message: '잘못된 접근입니다.' });
  }
};

export const isNotLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    next();
  } else {
    res.status(403).send({ message: '잘못된 접근입니다.' });
  }
};

export const isAdmin = (req, res, next) => {
  if (req.user.isAdmin) {
    next();
  } else {
    res.status(403).send({ message: '잘못된 접근입니다.' });
  }
};

export const isNotAdmin = (req, res, next) => {
  if (!req.user.isAdmin) {
    next();
  } else {
    res.status(403).send({ message: '잘못된 접근입니다.' });
  }
};
