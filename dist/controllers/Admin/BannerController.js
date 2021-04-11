"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var router = _express["default"].Router();

router.post('/'); // 등록

router.get('/'); // 전체 조회 & 조건 조회

router.patch('/:id'); // 배너 수정

router.patch('/:id/activate'); // 배너 활성화/비활성화

router["delete"]('/:id'); // 배너 삭제

var _default = router;
exports["default"] = _default;