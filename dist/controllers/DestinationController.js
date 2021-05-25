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

var DestinationService = _interopRequireWildcard(require("../services/DestinationService"));

var router = _express["default"].Router();

router.post('/', AuthHelper.isLoggedIn, DestinationService.create);
router.get('/', AuthHelper.isLoggedIn, DestinationService.findAll);
router.patch('/:id', AuthHelper.isLoggedIn, DestinationService.updateById);
router["delete"]('/:id', AuthHelper.isLoggedIn, DestinationService.deleteById);
var _default = router;
exports["default"] = _default;