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

var ProductService = _interopRequireWildcard(require("../services/ProductService"));

var ProductValidation = _interopRequireWildcard(require("../validations/ProductValidation"));

var router = _express["default"].Router(); // Admin 전용


router.post('/', AuthHelper.isLoggedIn, AuthHelper.isAdmin, ProductValidation.productRequest, ProductService.create); // 등록

router.patch('/:id', AuthHelper.isLoggedIn, AuthHelper.isAdmin, ProductValidation.productRequest, ProductService.updateById); // 상품 수정

router["delete"]('/:id', AuthHelper.isLoggedIn, AuthHelper.isAdmin, ProductService.deleteById); // 배너 삭제 --> 실제 삭제가 아니다!
// 공용

router.get('/', ProductService.findAll); // 검색, 정렬, 필터 다 되어야 한다!

router.get('/new', ProductService.findNew);
router.get('/:id', ProductService.findById); // id 별 상세 조회

router.get('/:id/review', ProductService.findReview); // id 별 상세 조회

var _default = router;
exports["default"] = _default;