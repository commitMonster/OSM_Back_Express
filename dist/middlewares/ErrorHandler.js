"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.errorHandler = exports.logHandler = void 0;

var _stringify = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/json/stringify"));

var logHandler = function logHandler(err, req, res, next) {
  console.error('[' + new Date() + ']\n' + (err.msg || err.message));
  next(err);
};

exports.logHandler = logHandler;

var errorHandler = function errorHandler(err, req, res) {
  if (err.code === 'P2002') {
    res.status(409);
    res.type('json').send((0, _stringify["default"])({
      error: err || 'Uncaught Error !'
    }, null, 4));
  } else {
    res.status(err.status || 500);
    res.type('json').send((0, _stringify["default"])({
      error: err || 'Uncaught Error !'
    }, null, 4));
  }
};

exports.errorHandler = errorHandler;