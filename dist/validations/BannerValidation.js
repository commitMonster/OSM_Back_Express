"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.bannerRequest = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs3/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/asyncToGenerator"));

var _expressValidator = require("express-validator");

var bannerRequest = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var DateTimeRegex, error;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            DateTimeRegex = /^([\\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-2])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T\s]((([01]\d|2[0-3])((:?)[0-5]\d)?|24\\:?00)([\\.,]\d+(?!:))?)?(\17[0-5]\d([\\.,]\d+)?)?([zZ]|([\\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/;
            _context.prev = 1;
            _context.next = 4;
            return (0, _expressValidator.check)('title').isString().run(req);

          case 4:
            _context.next = 6;
            return (0, _expressValidator.check)('description').isString().run(req);

          case 6:
            _context.next = 8;
            return (0, _expressValidator.check)('type').isNumeric().run(req);

          case 8:
            _context.next = 10;
            return (0, _expressValidator.check)('image').isString().run(req);

          case 10:
            _context.next = 12;
            return (0, _expressValidator.check)('startDate').matches(DateTimeRegex).run(req);

          case 12:
            _context.next = 14;
            return (0, _expressValidator.check)('endDate').matches(DateTimeRegex).run(req);

          case 14:
            req.body.type = Number(req.body.type);
            req.body.startDate = new Date(req.body.startDate);
            req.body.endDate = new Date(req.body.endDate);
            error = (0, _expressValidator.validationResult)(req);

            if (!error.isEmpty()) {
              error["throw"]();
            }

            next();
            _context.next = 26;
            break;

          case 22:
            _context.prev = 22;
            _context.t0 = _context["catch"](1);
            res.status(400);
            return _context.abrupt("return", res.send(_context.t0.mapped()));

          case 26:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 22]]);
  }));

  return function bannerRequest(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.bannerRequest = bannerRequest;