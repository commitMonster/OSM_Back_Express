"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.format = void 0;

var _luxon = require("luxon");

var format = function format(date) {
  return _luxon.DateTime.fromJSDate(date).toFormat('yyyy-MM-dd HH:mm:ss');
};

exports.format = format;