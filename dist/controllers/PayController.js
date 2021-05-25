"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

var _interopRequireWildcard = require("@babel/runtime-corejs3/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var PayService = _interopRequireWildcard(require("../services/PayService"));

var router = _express["default"].Router(); // 결제 요청


router.post('/', PayService.request); // 결제 이후 상황

router.get('/success', PayService.success);
router.get('/cancel', PayService.cancel);
router.get('/fail', PayService.fail);
var _default = router;
exports["default"] = _default;