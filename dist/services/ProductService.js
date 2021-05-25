"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

var _interopRequireWildcard = require("@babel/runtime-corejs3/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.findReview = exports.findNew = exports.findAll = exports.findById = exports.deleteById = exports.updateById = exports.create = void 0;

var _sort = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/sort"));

var _map = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/map"));

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs3/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/asyncToGenerator"));

var ProductRepository = _interopRequireWildcard(require("../repositorys/ProductRepository"));

var ReviewRepository = _interopRequireWildcard(require("../repositorys/ReviewRepository"));

var create = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var data, product;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            data = req.body;
            data.isDeleted = false;
            _context.next = 5;
            return ProductRepository.create(data);

          case 5:
            product = _context.sent;
            product.image = product.image.split(',');
            return _context.abrupt("return", res.send(product));

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](0);
            console.error(_context.t0);
            next(_context.t0);

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 10]]);
  }));

  return function create(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.create = create;

var updateById = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res, next) {
    var data, product;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            data = req.body;
            data.isDeleted = false;
            _context2.next = 5;
            return ProductRepository.updateById(Number(req.params.id), data);

          case 5:
            product = _context2.sent;
            product.image = product.image.split(',');
            return _context2.abrupt("return", res.send(product));

          case 10:
            _context2.prev = 10;
            _context2.t0 = _context2["catch"](0);
            console.error(_context2.t0);
            next(_context2.t0);

          case 14:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 10]]);
  }));

  return function updateById(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

exports.updateById = updateById;

var deleteById = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res, next) {
    var product;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return ProductRepository.deleteById(Number(req.params.id));

          case 3:
            product = _context3.sent;
            product.image = product.image.split(',');
            return _context3.abrupt("return", res.send(product));

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](0);
            console.error(_context3.t0);
            next(_context3.t0);

          case 12:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 8]]);
  }));

  return function deleteById(_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}();

exports.deleteById = deleteById;

var findById = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res, next) {
    var product;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return ProductRepository.findById(Number(req.params.id));

          case 3:
            product = _context4.sent;
            product.image = product.image.split(',');
            return _context4.abrupt("return", res.send(product));

          case 8:
            _context4.prev = 8;
            _context4.t0 = _context4["catch"](0);
            console.error(_context4.t0);
            next(_context4.t0);

          case 12:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 8]]);
  }));

  return function findById(_x10, _x11, _x12) {
    return _ref4.apply(this, arguments);
  };
}();
/**
 *
 * @todo
 * 전체 보여주기(했음)
 * 검색 - 상품명 기준(했음)
 * 정렬 - 가격, 인기(했음)
 * 카테고리 (했음)
 * 삭제 여부 (했음)
 * listSize=60&page=1&(했음)
 * isPriceRange=false&minPrice=&maxPrice=&(했음)
 * orderBy=price&sort=asc(했음)
 * category=& (했음)
 * isDeleted=& (했음)
 * 필터 - 가격(했음)
 * 카테고리 전체(했음)
 * + pagination
 */


exports.findById = findById;

var findAll = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res, next) {
    var _req$query, q, orderBy, sort, minPrice, maxPrice, DEFAULT_MIN_PRICE, DEFAULT_MAX_PRICT, isPriceRange, categoryId, isDeleted, pageSize, page, pagination, orderOption, whereOption, productList, itemCount;

    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _req$query = req.query, q = _req$query.q, orderBy = _req$query.orderBy, sort = (0, _sort["default"])(_req$query);
            minPrice = Number(req.query.minPrice);
            maxPrice = Number(req.query.maxPrice);
            DEFAULT_MIN_PRICE = -1;
            DEFAULT_MAX_PRICT = 2100000000;
            isPriceRange = req.query.isPriceRange === 'true' ? true : false;
            categoryId = req.query.categoryId ? Number(req.query.categoryId) : null;
            isDeleted = req.query.isDeleted === 'true' ? true : false;
            pageSize = Number(req.query.pageSize);
            page = Number(req.query.page);
            pagination = {
              skip: pageSize * (page - 1),
              take: pageSize
            };
            orderOption = {};
            orderOption[orderBy] = sort;
            whereOption = [{
              isDeleted: isDeleted
            }];

            if (categoryId) {
              whereOption.push({
                categoryId: categoryId
              });
            }

            if (q) {
              whereOption.push({
                name: {
                  contains: q
                }
              });
            }

            if (isPriceRange) {
              whereOption.push({
                price: {
                  gte: minPrice
                }
              }, {
                price: {
                  lte: maxPrice
                }
              });
            } else {
              whereOption.push({
                price: {
                  gte: DEFAULT_MIN_PRICE
                }
              }, {
                price: {
                  lte: DEFAULT_MAX_PRICT
                }
              });
            }

            _context5.next = 20;
            return ProductRepository.findAllByWhereOptionOrderByOrderOption(pagination, whereOption, orderOption);

          case 20:
            productList = _context5.sent;
            _context5.next = 23;
            return ProductRepository.countByWhereOptionOrderByOrderOption(whereOption, orderOption);

          case 23:
            itemCount = _context5.sent;
            (0, _map["default"])(productList).call(productList, function (product) {
              product.image = product.image.split(',');
            });
            return _context5.abrupt("return", res.send({
              productList: productList,
              itemCount: itemCount
            }));

          case 28:
            _context5.prev = 28;
            _context5.t0 = _context5["catch"](0);
            console.error(_context5.t0);
            next(_context5.t0);

          case 32:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 28]]);
  }));

  return function findAll(_x13, _x14, _x15) {
    return _ref5.apply(this, arguments);
  };
}();

exports.findAll = findAll;

var findNew = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res, next) {
    var newProductList;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            _context6.next = 3;
            return ProductRepository.findOrderByCreatedAtLimitFive();

          case 3:
            newProductList = _context6.sent;
            (0, _map["default"])(newProductList).call(newProductList, function (product) {
              product.image = product.image.split(',');
            });
            return _context6.abrupt("return", res.send(newProductList));

          case 8:
            _context6.prev = 8;
            _context6.t0 = _context6["catch"](0);
            console.error(_context6.t0);
            next(_context6.t0);

          case 12:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[0, 8]]);
  }));

  return function findNew(_x16, _x17, _x18) {
    return _ref6.apply(this, arguments);
  };
}();

exports.findNew = findNew;

var findReview = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(req, res, next) {
    var reviewList;
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            _context7.next = 3;
            return ReviewRepository.findByProductId(Number(req.params.id));

          case 3:
            reviewList = _context7.sent;
            return _context7.abrupt("return", res.send(reviewList));

          case 7:
            _context7.prev = 7;
            _context7.t0 = _context7["catch"](0);
            console.error(_context7.t0);
            next(_context7.t0);

          case 11:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[0, 7]]);
  }));

  return function findReview(_x19, _x20, _x21) {
    return _ref7.apply(this, arguments);
  };
}();

exports.findReview = findReview;