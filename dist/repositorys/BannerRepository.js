"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.deleteById = exports.updateActivationById = exports.updateById = exports.findById = exports.findAllByEndDate = exports.findAllByStartDate = exports.findAllBetween = exports.findAllOrderBy = exports.create = void 0;

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
            return _context.abrupt("return", prisma.noticeEvent.create({
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

var findAllOrderBy = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(sort) {
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            return _context2.abrupt("return", prisma.noticeEvent.findMany({
              orderBy: [{
                endDate: sort
              }]
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

  return function findAllOrderBy(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

exports.findAllOrderBy = findAllOrderBy;

var findAllBetween = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(start, end, sort) {
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            return _context3.abrupt("return", prisma.noticeEvent.findMany({
              orderBy: [{
                endDate: sort
              }],
              where: {
                startDate: {
                  lte: end
                },
                endDate: {
                  gte: start
                }
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

  return function findAllBetween(_x3, _x4, _x5) {
    return _ref3.apply(this, arguments);
  };
}();

exports.findAllBetween = findAllBetween;

var findAllByStartDate = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(start, sort) {
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            return _context4.abrupt("return", prisma.noticeEvent.findMany({
              orderBy: [{
                endDate: sort
              }],
              where: {
                startDate: {
                  lte: start
                }
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

  return function findAllByStartDate(_x6, _x7) {
    return _ref4.apply(this, arguments);
  };
}();

exports.findAllByStartDate = findAllByStartDate;

var findAllByEndDate = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(end, sort) {
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            return _context5.abrupt("return", prisma.noticeEvent.findMany({
              orderBy: [{
                endDate: sort
              }],
              where: {
                endDate: {
                  gte: end
                }
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

  return function findAllByEndDate(_x8, _x9) {
    return _ref5.apply(this, arguments);
  };
}();

exports.findAllByEndDate = findAllByEndDate;

var findById = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(id) {
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            return _context6.abrupt("return", prisma.noticeEvent.findUnique({
              where: {
                id: id
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

  return function findById(_x10) {
    return _ref6.apply(this, arguments);
  };
}();

exports.findById = findById;

var updateById = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(id, data) {
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            return _context7.abrupt("return", prisma.noticeEvent.update({
              where: {
                id: id
              },
              data: data
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

  return function updateById(_x11, _x12) {
    return _ref7.apply(this, arguments);
  };
}();

exports.updateById = updateById;

var updateActivationById = /*#__PURE__*/function () {
  var _ref8 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(id, activation) {
    return _regenerator["default"].wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.prev = 0;
            return _context8.abrupt("return", prisma.noticeEvent.update({
              where: {
                id: id
              },
              data: {
                activation: activation
              }
            }));

          case 4:
            _context8.prev = 4;
            _context8.t0 = _context8["catch"](0);
            console.error(_context8.t0);

          case 7:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, null, [[0, 4]]);
  }));

  return function updateActivationById(_x13, _x14) {
    return _ref8.apply(this, arguments);
  };
}();

exports.updateActivationById = updateActivationById;

var deleteById = /*#__PURE__*/function () {
  var _ref9 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(id) {
    return _regenerator["default"].wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.prev = 0;
            return _context9.abrupt("return", prisma.noticeEvent["delete"]({
              where: {
                id: id
              }
            }));

          case 4:
            _context9.prev = 4;
            _context9.t0 = _context9["catch"](0);
            console.error(_context9.t0);

          case 7:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9, null, [[0, 4]]);
  }));

  return function deleteById(_x15) {
    return _ref9.apply(this, arguments);
  };
}();

exports.deleteById = deleteById;