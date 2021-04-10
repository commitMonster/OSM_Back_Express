"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _dotenv = _interopRequireDefault(require("dotenv"));

// .env.* loading...
_dotenv["default"].config();

var NODE_ENV = process.env.NODE_ENV || 'dev';
if (NODE_ENV === 'prod') _dotenv["default"].config({
  path: "".concat(__dirname, "/../../.prod.env")
});else if (NODE_ENV === 'dev') _dotenv["default"].config({
  path: "".concat(__dirname, "/../../.dev.env")
});else if (NODE_ENV === 'test') _dotenv["default"].config({
  path: "".concat(__dirname, "/../../.test.env")
});
var env = process.env;
var _default = {
  NODE_ENV: NODE_ENV,
  HOST: env.HOST,
  PORT: Number(env.PORT),
  COOKIE_SECRET: env.COOKIE_SECRET
};
exports["default"] = _default;