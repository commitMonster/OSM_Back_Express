"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.productRequest = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs3/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/asyncToGenerator"));

var _expressValidator = require("express-validator");

var productRequest = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var error;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return (0, _expressValidator.check)('name').isString().run(req);

          case 3:
            _context.next = 5;
            return (0, _expressValidator.check)('description').isString().run(req);

          case 5:
            _context.next = 7;
            return (0, _expressValidator.check)('count').isNumeric().run(req);

          case 7:
            _context.next = 9;
            return (0, _expressValidator.check)('price').isNumeric().run(req);

          case 9:
            _context.next = 11;
            return (0, _expressValidator.check)('image').isString().run(req);

          case 11:
            _context.next = 13;
            return (0, _expressValidator.check)('delivery').isNumeric().run(req);

          case 13:
            _context.next = 15;
            return (0, _expressValidator.check)('categoryId').isNumeric().run(req);

          case 15:
            req.body.count = Number(req.body.count);
            req.body.price = Number(req.body.price);
            error = (0, _expressValidator.validationResult)(req);

            if (!error.isEmpty()) {
              error["throw"]();
            }

            next();
            _context.next = 26;
            break;

          case 22:
            _context.prev = 22;
            _context.t0 = _context["catch"](0);
            res.status(400);
            return _context.abrupt("return", res.send(_context.t0.mapped()));

          case 26:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 22]]);
  }));

  return function productRequest(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.productRequest = productRequest;