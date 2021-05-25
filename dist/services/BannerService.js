"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

var _interopRequireWildcard = require("@babel/runtime-corejs3/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.deleteById = exports.updateActivationById = exports.updateById = exports.findById = exports.findAll = exports.create = void 0;

var _sort = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/sort"));

var _map = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/map"));

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs3/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/asyncToGenerator"));

var BannerRepository = _interopRequireWildcard(require("../repositorys/BannerRepository"));

var DateTime = _interopRequireWildcard(require("../utils/DateTime"));

var formatBanner = function formatBanner(banner) {
  banner.startDate = DateTime.format(banner.startDate);
  banner.endDate = DateTime.format(banner.endDate);
  banner.image = banner.image.split(',');
  return banner;
};

var create = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var banner;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.t0 = formatBanner;
            _context.next = 4;
            return BannerRepository.create(req.body);

          case 4:
            _context.t1 = _context.sent;
            banner = (0, _context.t0)(_context.t1);
            return _context.abrupt("return", res.send(banner));

          case 9:
            _context.prev = 9;
            _context.t2 = _context["catch"](0);
            console.error(_context.t2);
            next(_context.t2);

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 9]]);
  }));

  return function create(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.create = create;

var findAll = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res, next) {
    var sort, banners, start, end, _end, _start;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            sort = req.query.orderBy || 'asc';
            _context2.prev = 1;

            if (!(req.query.start && req.query.end)) {
              _context2.next = 10;
              break;
            }

            // 선택한 날짜에 진행 중인 이벤트
            start = new Date(req.query.start + ' 00:00:00');
            end = new Date(req.query.end + ' 23:59:59');
            _context2.next = 7;
            return BannerRepository.findAllBetween(start, end, sort);

          case 7:
            banners = _context2.sent;
            _context2.next = 27;
            break;

          case 10:
            if (!((0, _sort["default"])(req.query) === 'now')) {
              _context2.next = 17;
              break;
            }

            // 현재 진행 중인 이벤트
            _end = new Date(new Date().toLocaleDateString() + ' 23:59:59');
            _context2.next = 14;
            return BannerRepository.findAllByEndDate(_end, sort);

          case 14:
            banners = _context2.sent;
            _context2.next = 27;
            break;

          case 17:
            if (!((0, _sort["default"])(req.query) === 'end')) {
              _context2.next = 24;
              break;
            }

            // 종료된 이벤트
            _start = new Date(new Date().toLocaleDateString() + ' 00:00:00');
            _context2.next = 21;
            return BannerRepository.findAllByStartDate(_start, sort);

          case 21:
            banners = _context2.sent;
            _context2.next = 27;
            break;

          case 24:
            _context2.next = 26;
            return BannerRepository.findAllOrderBy(sort);

          case 26:
            banners = _context2.sent;

          case 27:
            (0, _map["default"])(banners).call(banners, function (banner) {
              return formatBanner(banner);
            });
            return _context2.abrupt("return", res.send(banners));

          case 31:
            _context2.prev = 31;
            _context2.t0 = _context2["catch"](1);
            console.error(_context2.t0);
            next(_context2.t0);

          case 35:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 31]]);
  }));

  return function findAll(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

exports.findAll = findAll;

var findById = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res, next) {
    var banner;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.t0 = formatBanner;
            _context3.next = 4;
            return BannerRepository.findById(Number(req.params.id));

          case 4:
            _context3.t1 = _context3.sent;
            banner = (0, _context3.t0)(_context3.t1);
            return _context3.abrupt("return", res.send(banner));

          case 9:
            _context3.prev = 9;
            _context3.t2 = _context3["catch"](0);
            console.error(_context3.t2);
            next(_context3.t2);

          case 13:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 9]]);
  }));

  return function findById(_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}();

exports.findById = findById;

var updateById = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res, next) {
    var banner;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.t0 = formatBanner;
            _context4.next = 4;
            return BannerRepository.updateById(Number(req.params.id), req.body);

          case 4:
            _context4.t1 = _context4.sent;
            banner = (0, _context4.t0)(_context4.t1);
            return _context4.abrupt("return", res.send(banner));

          case 9:
            _context4.prev = 9;
            _context4.t2 = _context4["catch"](0);
            console.error(_context4.t2);
            next(_context4.t2);

          case 13:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 9]]);
  }));

  return function updateById(_x10, _x11, _x12) {
    return _ref4.apply(this, arguments);
  };
}();

exports.updateById = updateById;

var updateActivationById = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res, next) {
    var banner;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.t0 = formatBanner;
            _context5.next = 4;
            return BannerRepository.updateActivationById(Number(req.params.id), req.body.activation);

          case 4:
            _context5.t1 = _context5.sent;
            banner = (0, _context5.t0)(_context5.t1);
            return _context5.abrupt("return", res.send(banner));

          case 9:
            _context5.prev = 9;
            _context5.t2 = _context5["catch"](0);
            console.error(_context5.t2);
            next(_context5.t2);

          case 13:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 9]]);
  }));

  return function updateActivationById(_x13, _x14, _x15) {
    return _ref5.apply(this, arguments);
  };
}();

exports.updateActivationById = updateActivationById;

var deleteById = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res, next) {
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            _context6.next = 3;
            return BannerRepository.deleteById(Number(req.params.id));

          case 3:
            return _context6.abrupt("return", res.send({
              message: '삭제 성공'
            }));

          case 6:
            _context6.prev = 6;
            _context6.t0 = _context6["catch"](0);
            console.error(_context6.t0);
            next(_context6.t0);

          case 10:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[0, 6]]);
  }));

  return function deleteById(_x16, _x17, _x18) {
    return _ref6.apply(this, arguments);
  };
}();

exports.deleteById = deleteById;