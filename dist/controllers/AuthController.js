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

var AuthService = _interopRequireWildcard(require("../services/AuthService"));

var JoinValidaton = _interopRequireWildcard(require("../validations/JoinValidation"));

var router = _express["default"].Router();

router.get('/', AuthHelper.isLoggedIn, AuthService.find);
router.post('/signin', AuthHelper.isNotLoggedIn, AuthHelper.signin);
router.post('/signout', AuthHelper.isLoggedIn, AuthHelper.signout);
router.post('/signup', JoinValidaton.joinRequest, AuthHelper.isNotLoggedIn, AuthService.signup, AuthHelper.signin);
router.post('/check/:type', AuthHelper.isNotLoggedIn, AuthService.isDuplicated);
var _default = router;
exports["default"] = _default;