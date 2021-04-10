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

router.post('/login', AuthHelper.isNotLoggedIn, AuthHelper.login);
router.post('/logout', AuthHelper.isLoggedIn, AuthHelper.logout);
router.post('/join', JoinValidaton.joinRequest, AuthHelper.isNotLoggedIn, AuthService.join);
router.post('/check', JoinValidaton.idRequest, AuthHelper.isNotLoggedIn, AuthService.isIdDuplicated);
var _default = router;
exports["default"] = _default;