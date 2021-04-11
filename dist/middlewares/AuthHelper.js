"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.isNotAdmin = exports.isAdmin = exports.isNotLoggedIn = exports.isLoggedIn = exports.logout = exports.login = void 0;

var _passport = _interopRequireDefault(require("passport"));

var login = function login(req, res, next) {
  _passport["default"].authenticate('local', function (err, user) {
    if (err) {
      console.error(err);
      return next(err);
    }

    if (!user) {
      return res.status(401).send({
        Error: '해당 유저 정보가 없습니다.'
      });
    }

    return req.login(user, function (loginError) {
      if (loginError) {
        console.error(loginError);
        return res.status(500).send({
          Error: '로그인에 실패했습니다.'
        });
      }

      if (user.isAdmin) {
        res.send({
          isAdmin: true
        });
      } else {
        res.send({
          isAdmin: false
        });
      }
    });
  })(req, res, next);
};

exports.login = login;

var logout = function logout(req, res, next) {
  req.logout();
  req.session.destroy(function (err) {
    if (err) {
      console.error(err);
      next(err);
    } else {
      res.clearCookie('connect.sid');
      res.send({
        message: '로그아웃 성공'
      });
    }
  });
};

exports.logout = logout;

var isLoggedIn = function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.status(403).send('잘못된 접근입니다.');
  }
};

exports.isLoggedIn = isLoggedIn;

var isNotLoggedIn = function isNotLoggedIn(req, res, next) {
  if (!req.isAuthenticated()) {
    next();
  } else {
    res.status(403).send('잘못된 접근입니다.');
  }
};

exports.isNotLoggedIn = isNotLoggedIn;

var isAdmin = function isAdmin(req, res, next) {
  if (req.user.isAdmin) {
    next();
  } else {
    res.status(403).send('잘못된 접근입니다.');
  }
};

exports.isAdmin = isAdmin;

var isNotAdmin = function isNotAdmin(req, res, next) {
  if (!req.user.isAdmin) {
    next();
  } else {
    res.status(403).send('잘못된 접근입니다.');
  }
};

exports.isNotAdmin = isNotAdmin;