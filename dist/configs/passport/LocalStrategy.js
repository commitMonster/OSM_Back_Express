"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

var _interopRequireWildcard = require("@babel/runtime-corejs3/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs3/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/asyncToGenerator"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _passportLocal = _interopRequireDefault(require("passport-local"));

var UserRepository = _interopRequireWildcard(require("../../repositorys/UserRepository"));

var LocalStrategy = _passportLocal["default"].Strategy;

var _default = function _default(passport) {
  passport.use(new LocalStrategy({
    usernameField: 'userId',
    //req.body.id
    passwordField: 'password',
    //req.body.password
    session: true // 세션에 저장 여부

  }, /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(userId, password, cb) {
      var findUser, result;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return UserRepository.findByUserId(userId);

            case 3:
              findUser = _context.sent;

              if (findUser) {
                _context.next = 6;
                break;
              }

              return _context.abrupt("return", cb(null, false));

            case 6:
              _context.next = 8;
              return _bcrypt["default"].compare(password, findUser.password);

            case 8:
              result = _context.sent;

              if (result) {
                _context.next = 11;
                break;
              }

              return _context.abrupt("return", cb(null, false));

            case 11:
              return _context.abrupt("return", cb(null, findUser));

            case 14:
              _context.prev = 14;
              _context.t0 = _context["catch"](0);
              return _context.abrupt("return", cb(_context.t0));

            case 17:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 14]]);
    }));

    return function (_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }()));
};

exports["default"] = _default;