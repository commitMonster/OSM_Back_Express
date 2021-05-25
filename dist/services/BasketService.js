"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

var _interopRequireWildcard = require("@babel/runtime-corejs3/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.deleteAll = exports.deleteById = exports.updateById = exports.findAll = exports.create = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs3/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/asyncToGenerator"));

var BasketRepository = _interopRequireWildcard(require("../repositorys/BasketRepository"));

var ProductRepository = _interopRequireWildcard(require("../repositorys/ProductRepository"));

var create = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var data, product, curruntBasket, numberOfProductsWantToBuy, addCountBasket, basket;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            data = req.body;
            _context.next = 4;
            return ProductRepository.findById(data.productId);

          case 4:
            product = _context.sent;

            if (!(product === null || product.isDeleted)) {
              _context.next = 9;
              break;
            }

            return _context.abrupt("return", res.send({
              status: false,
              message: '해당 상품은 없습니다.'
            }));

          case 9:
            if (!(data.count > product.count)) {
              _context.next = 11;
              break;
            }

            return _context.abrupt("return", res.send({
              status: false,
              message: '상품의 수량이 부족합니다.'
            }));

          case 11:
            _context.next = 13;
            return BasketRepository.findByUserIdAndProductId(req.user.id, data.productId);

          case 13:
            curruntBasket = _context.sent;

            if (!curruntBasket.length) {
              _context.next = 24;
              break;
            }

            numberOfProductsWantToBuy = data.count + curruntBasket[0].count;

            if (!(product.count < numberOfProductsWantToBuy)) {
              _context.next = 18;
              break;
            }

            return _context.abrupt("return", res.send({
              status: false,
              message: '상품의 수량이 부족합니다.'
            }));

          case 18:
            _context.next = 20;
            return BasketRepository.updateByIdAndCount(curruntBasket[0].id, numberOfProductsWantToBuy);

          case 20:
            addCountBasket = _context.sent;
            return _context.abrupt("return", res.send(addCountBasket));

          case 24:
            data.userId = req.user.id;
            _context.next = 27;
            return BasketRepository.create(data);

          case 27:
            basket = _context.sent;
            return _context.abrupt("return", res.send(basket));

          case 29:
            _context.next = 35;
            break;

          case 31:
            _context.prev = 31;
            _context.t0 = _context["catch"](0);
            console.error(_context.t0);
            next(_context.t0);

          case 35:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 31]]);
  }));

  return function create(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.create = create;

var findAll = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res, next) {
    var basketList;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return BasketRepository.findAll();

          case 3:
            basketList = _context2.sent;
            return _context2.abrupt("return", res.send(basketList));

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            console.error(_context2.t0);
            next(_context2.t0);

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 7]]);
  }));

  return function findAll(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

exports.findAll = findAll;

var updateById = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res, next) {
    var product, updateProduct;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return ProductRepository.findById(Number(req.params.id));

          case 3:
            product = _context3.sent;

            if (!(req.body.count > product.count)) {
              _context3.next = 6;
              break;
            }

            return _context3.abrupt("return", res.send({
              status: false,
              message: '상품의 수량이 부족합니다.'
            }));

          case 6:
            _context3.next = 8;
            return BasketRepository.updateByIdAndCount(Number(req.params.id), req.body.count);

          case 8:
            updateProduct = _context3.sent;
            return _context3.abrupt("return", res.send(updateProduct));

          case 12:
            _context3.prev = 12;
            _context3.t0 = _context3["catch"](0);
            console.error(_context3.t0);
            next(_context3.t0);

          case 16:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 12]]);
  }));

  return function updateById(_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}();

exports.updateById = updateById;

var deleteById = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res, next) {
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return BasketRepository.deleteById(Number(req.params.id));

          case 3:
            return _context4.abrupt("return", res.send({
              message: '삭제 성공'
            }));

          case 6:
            _context4.prev = 6;
            _context4.t0 = _context4["catch"](0);
            console.error(_context4.t0);
            next(_context4.t0);

          case 10:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 6]]);
  }));

  return function deleteById(_x10, _x11, _x12) {
    return _ref4.apply(this, arguments);
  };
}();

exports.deleteById = deleteById;

var deleteAll = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res, next) {
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return BasketRepository.deleteMany(req.user.id);

          case 3:
            return _context5.abrupt("return", res.send({
              message: '삭제 성공'
            }));

          case 6:
            _context5.prev = 6;
            _context5.t0 = _context5["catch"](0);
            console.error(_context5.t0);
            next(_context5.t0);

          case 10:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 6]]);
  }));

  return function deleteAll(_x13, _x14, _x15) {
    return _ref5.apply(this, arguments);
  };
}();

exports.deleteAll = deleteAll;