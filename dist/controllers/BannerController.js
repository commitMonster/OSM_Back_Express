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

var BannerService = _interopRequireWildcard(require("../services/BannerService"));

var BannerValidation = _interopRequireWildcard(require("../validations/BannerValidation"));

var router = _express["default"].Router(); // Admin 전용


router.post('/', AuthHelper.isLoggedIn, AuthHelper.isAdmin, BannerValidation.bannerRequest, BannerService.create); // 등록

router.patch('/:id', AuthHelper.isLoggedIn, AuthHelper.isAdmin, BannerValidation.bannerRequest, BannerService.updateById); // 배너 수정

router.patch('/:id/activate', AuthHelper.isLoggedIn, AuthHelper.isAdmin, BannerService.updateActivationById); // 배너 활성화/비활성화

router["delete"]('/:id', AuthHelper.isLoggedIn, AuthHelper.isAdmin, BannerService.deleteById); // 배너 삭제
// 공용

router.get('/', BannerService.findAll); // 전체 조회 & 조건 조회

router.get('/:id', BannerService.findById); // id 별 상세 조회

var _default = router;
exports["default"] = _default;