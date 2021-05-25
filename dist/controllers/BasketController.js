"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

var _interopRequireWildcard = require("@babel/runtime-corejs3/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var AuthHelper = _interopRequireWildcard(require("../middlewares/AuthHelper"));

var BasketService = _interopRequireWildcard(require("../services/BasketService"));

var router = _express["default"].Router();

router.post('/', AuthHelper.isLoggedIn, BasketService.create);
router.get('/', AuthHelper.isLoggedIn, BasketService.findAll);
router.patch('/:id', AuthHelper.isLoggedIn, BasketService.updateById);
router["delete"]('/:id', AuthHelper.isLoggedIn, BasketService.deleteById);
router["delete"]('/', AuthHelper.isLoggedIn, BasketService.deleteAll);
var _default = router;
exports["default"] = _default;