"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.create = exports.findByEmail = exports.findByUserId = exports.findById = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs3/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/asyncToGenerator"));

var _client = require("@prisma/client");

var prisma = new _client.PrismaClient();

var findById = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(id) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            return _context.abrupt("return", prisma.user.findUnique({
              where: {
                id: id
              }
            }));

          case 4:
            _context.prev = 4;
            _context.t0 = _context["catch"](0);
            console.error(_context.t0);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 4]]);
  }));

  return function findById(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.findById = findById;

var findByUserId = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(userId) {
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            return _context2.abrupt("return", prisma.user.findUnique({
              where: {
                userId: userId
              }
            }));

          case 4:
            _context2.prev = 4;
            _context2.t0 = _context2["catch"](0);
            console.error(_context2.t0);

          case 7:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 4]]);
  }));

  return function findByUserId(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

exports.findByUserId = findByUserId;

var findByEmail = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(email) {
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            return _context3.abrupt("return", prisma.user.findUnique({
              where: {
                email: email
              }
            }));

          case 4:
            _context3.prev = 4;
            _context3.t0 = _context3["catch"](0);
            console.error(_context3.t0);

          case 7:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 4]]);
  }));

  return function findByEmail(_x3) {
    return _ref3.apply(this, arguments);
  };
}();

exports.findByEmail = findByEmail;

var create = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(data) {
    var password, userId, name, email;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            password = data.password, userId = data.userId, name = data.name, email = data.email;
            _context4.prev = 1;
            return _context4.abrupt("return", prisma.user.create({
              data: {
                password: password,
                userId: userId,
                name: name,
                email: email
              }
            }));

          case 5:
            _context4.prev = 5;
            _context4.t0 = _context4["catch"](1);
            console.error(_context4.t0);

          case 8:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[1, 5]]);
  }));

  return function create(_x4) {
    return _ref4.apply(this, arguments);
  };
}();

exports.create = create;