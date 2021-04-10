"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.idRequest = exports.joinRequest = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs3/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/asyncToGenerator"));

var _expressValidator = require("express-validator");

/**
 *
 * @todo 비밀번호의 제약 조건에 대해서 고객에게 다시 여쭤봐야 함.
 */
var joinRequest = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var error;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return (0, _expressValidator.check)('userId').isString().run(req);

          case 3:
            _context.next = 5;
            return (0, _expressValidator.check)('password').isLength({
              min: 8,
              max: 12
            }).bail().matches(/^(?=.*[0-9])(?=.*[a-z])(?=.*[$@!%*#?&])[a-z0-9$@!%*#?&]{8,12}$/).run(req);

          case 5:
            _context.next = 7;
            return (0, _expressValidator.check)('email').isEmail().run(req);

          case 7:
            _context.next = 9;
            return (0, _expressValidator.check)('name').isString();

          case 9:
            error = (0, _expressValidator.validationResult)(req);

            if (!error.isEmpty()) {
              error["throw"]();
            }

            next();
            _context.next = 18;
            break;

          case 14:
            _context.prev = 14;
            _context.t0 = _context["catch"](0);
            res.status(400);
            res.send(_context.t0.mapped());

          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 14]]);
  }));

  return function joinRequest(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.joinRequest = joinRequest;

var idRequest = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res, next) {
    var error;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return (0, _expressValidator.check)('userId').isString().isLength({
              min: 4,
              max: 30
            }).run(req);

          case 3:
            error = (0, _expressValidator.validationResult)(req);

            if (!error.isEmpty()) {
              error["throw"]();
            }

            next();
            _context2.next = 12;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](0);
            res.status(400);
            res.send(_context2.t0.mapped());

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 8]]);
  }));

  return function idRequest(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

exports.idRequest = idRequest;