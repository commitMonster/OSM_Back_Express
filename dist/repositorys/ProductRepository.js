"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.findOrderByCreatedAtLimitFive = exports.countByWhereOptionOrderByOrderOption = exports.findAllByWhereOptionOrderByOrderOption = exports.findById = exports.deleteById = exports.updateById = exports.create = void 0;

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
            _context.next = 2;
            return prisma.product.create({
              data: data
            });

          case 2:
            return _context.abrupt("return", _context.sent);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function create(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.create = create;

var updateById = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(id, data) {
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt("return", prisma.product.update({
              where: {
                id: id
              },
              data: data
            }));

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function updateById(_x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}();

exports.updateById = updateById;

var deleteById = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(id) {
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return prisma.product.update({
              where: {
                id: id
              },
              data: {
                isDeleted: true
              }
            });

          case 2:
            return _context3.abrupt("return", _context3.sent);

          case 3:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function deleteById(_x4) {
    return _ref3.apply(this, arguments);
  };
}();

exports.deleteById = deleteById;

var findById = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(id) {
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return prisma.product.findUnique({
              where: {
                id: id
              },
              include: {
                _count: {
                  select: {
                    review: true
                  }
                }
              }
            });

          case 2:
            return _context4.abrupt("return", _context4.sent);

          case 3:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function findById(_x5) {
    return _ref4.apply(this, arguments);
  };
}();

exports.findById = findById;

var findAllByWhereOptionOrderByOrderOption = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(pagination, whereOption, orderOption) {
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return prisma.product.findMany({
              skip: pagination.skip,
              take: pagination.take,
              where: {
                AND: whereOption
              },
              include: {
                _count: {
                  select: {
                    review: true
                  }
                }
              },
              orderBy: [orderOption]
            });

          case 2:
            return _context5.abrupt("return", _context5.sent);

          case 3:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function findAllByWhereOptionOrderByOrderOption(_x6, _x7, _x8) {
    return _ref5.apply(this, arguments);
  };
}();

exports.findAllByWhereOptionOrderByOrderOption = findAllByWhereOptionOrderByOrderOption;

var countByWhereOptionOrderByOrderOption = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(whereOption, orderOption) {
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return prisma.product.count({
              where: {
                AND: whereOption
              },
              orderBy: [orderOption]
            });

          case 2:
            return _context6.abrupt("return", _context6.sent);

          case 3:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function countByWhereOptionOrderByOrderOption(_x9, _x10) {
    return _ref6.apply(this, arguments);
  };
}();

exports.countByWhereOptionOrderByOrderOption = countByWhereOptionOrderByOrderOption;

var findOrderByCreatedAtLimitFive = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7() {
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return prisma.product.findMany({
              orderBy: {
                createdAt: 'desc'
              },
              take: 5
            });

          case 2:
            return _context7.abrupt("return", _context7.sent);

          case 3:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));

  return function findOrderByCreatedAtLimitFive() {
    return _ref7.apply(this, arguments);
  };
}();

exports.findOrderByCreatedAtLimitFive = findOrderByCreatedAtLimitFive;