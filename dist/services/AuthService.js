"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

var _interopRequireWildcard = require("@babel/runtime-corejs3/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.isDuplicated = exports.signup = exports.find = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs3/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/asyncToGenerator"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _lodash = _interopRequireDefault(require("lodash"));

var BasketRepository = _interopRequireWildcard(require("../repositorys/BasketRepository"));

var UserRepository = _interopRequireWildcard(require("../repositorys/UserRepository"));

var find = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var count;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return BasketRepository.count(req.user.id);

          case 3:
            count = _context.sent;
            res.send({
              user: req.user,
              count: count
            });
            _context.next = 11;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            console.error(_context.t0);
            next(_context.t0);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));

  return function find(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.find = find;

var isUserExist = function isUserExist(user) {
  if (user) {
    return true;
  } else {
    return false;
  }
};

var signup = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res, next) {
    var data, user;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            data = _lodash["default"].cloneDeep(req.body);
            _context2.next = 4;
            return _bcrypt["default"].hash(data.password, 10);

          case 4:
            data.password = _context2.sent;
            _context2.next = 7;
            return UserRepository.create(data);

          case 7:
            user = _context2.sent;

            if (!user) {
              _context2.next = 12;
              break;
            }

            next();
            _context2.next = 13;
            break;

          case 12:
            throw new Error('알 수 없는 에러 발생');

          case 13:
            _context2.next = 19;
            break;

          case 15:
            _context2.prev = 15;
            _context2.t0 = _context2["catch"](0);
            console.error(_context2.t0);
            next(_context2.t0);

          case 19:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 15]]);
  }));

  return function signup(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

exports.signup = signup;

var isDuplicated = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res, next) {
    var user, _user;

    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;

            if (!(req.params.type === 'userId')) {
              _context3.next = 8;
              break;
            }

            _context3.next = 4;
            return UserRepository.findByUserId(req.body.userId);

          case 4:
            user = _context3.sent;
            return _context3.abrupt("return", res.send({
              isDuplicated: isUserExist(user)
            }));

          case 8:
            if (!(req.params.type === 'email')) {
              _context3.next = 15;
              break;
            }

            _context3.next = 11;
            return UserRepository.findByEmail(req.body.email);

          case 11:
            _user = _context3.sent;
            return _context3.abrupt("return", res.send({
              isDuplicated: isUserExist(_user)
            }));

          case 15:
            return _context3.abrupt("return", res.send({
              isDuplicated: false
            }));

          case 16:
            _context3.next = 22;
            break;

          case 18:
            _context3.prev = 18;
            _context3.t0 = _context3["catch"](0);
            console.error(_context3.t0);
            next(_context3.t0);

          case 22:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 18]]);
  }));

  return function isDuplicated(_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}();

exports.isDuplicated = isDuplicated;