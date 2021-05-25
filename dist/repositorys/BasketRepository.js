"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.count = exports.deleteMany = exports.deleteById = exports.updateByIdAndCount = exports.findByUserIdAndProductId = exports.findAll = exports.create = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs3/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/asyncToGenerator"));

var _client = require("@prisma/client");

var prisma = new _client.PrismaClient();

var create = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(data) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            return _context.abrupt("return", prisma.basket.create({
              data: data
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

  return function create(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.create = create;

var findAll = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            return _context2.abrupt("return", prisma.basket.findMany({}));

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

  return function findAll() {
    return _ref2.apply(this, arguments);
  };
}();

exports.findAll = findAll;

var findByUserIdAndProductId = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(userId, productId) {
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            return _context3.abrupt("return", prisma.basket.findMany({
              where: {
                userId: userId,
                productId: productId
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

  return function findByUserIdAndProductId(_x2, _x3) {
    return _ref3.apply(this, arguments);
  };
}();

exports.findByUserIdAndProductId = findByUserIdAndProductId;

var updateByIdAndCount = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(id, count) {
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            return _context4.abrupt("return", prisma.basket.update({
              where: {
                id: id
              },
              data: {
                count: count
              }
            }));

          case 4:
            _context4.prev = 4;
            _context4.t0 = _context4["catch"](0);
            console.error(_context4.t0);

          case 7:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 4]]);
  }));

  return function updateByIdAndCount(_x4, _x5) {
    return _ref4.apply(this, arguments);
  };
}();

exports.updateByIdAndCount = updateByIdAndCount;

var deleteById = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(id) {
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            return _context5.abrupt("return", prisma.basket["delete"]({
              where: {
                id: id
              }
            }));

          case 4:
            _context5.prev = 4;
            _context5.t0 = _context5["catch"](0);
            console.error(_context5.t0);

          case 7:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 4]]);
  }));

  return function deleteById(_x6) {
    return _ref5.apply(this, arguments);
  };
}();

exports.deleteById = deleteById;

var deleteMany = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(userId) {
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            return _context6.abrupt("return", prisma.basket.deleteMany({
              where: {
                userId: userId
              }
            }));

          case 4:
            _context6.prev = 4;
            _context6.t0 = _context6["catch"](0);
            console.error(_context6.t0);

          case 7:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[0, 4]]);
  }));

  return function deleteMany(_x7) {
    return _ref6.apply(this, arguments);
  };
}();

exports.deleteMany = deleteMany;

var count = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(userId) {
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            return _context7.abrupt("return", prisma.basket.count({
              where: {
                AND: {
                  userId: userId
                }
              }
            }));

          case 4:
            _context7.prev = 4;
            _context7.t0 = _context7["catch"](0);
            console.error(_context7.t0);

          case 7:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[0, 4]]);
  }));

  return function count(_x8) {
    return _ref7.apply(this, arguments);
  };
}();

exports.count = count;