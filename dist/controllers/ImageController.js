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

var ImageService = _interopRequireWildcard(require("../services/ImageService"));

var router = _express["default"].Router();

router.use('/', _express["default"]["static"]("".concat(__dirname, "/../../images")));
router.post('/', AuthHelper.isLoggedIn, ImageService.uploader.array('files'), ImageService.upload);
router["delete"]('/', AuthHelper.isLoggedIn, ImageService.deletePhoto);
var _default = router;
exports["default"] = _default;