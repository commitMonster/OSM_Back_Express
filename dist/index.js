"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _concat = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/concat"));

var _app = _interopRequireDefault(require("./app.js"));

var _index = _interopRequireDefault(require("./configs/index.js"));

_app["default"].listen(_index["default"].PORT, _index["default"].HOST, function (err) {
  var _context;

  if (err) {
    console.error(err);
  }

  console.log((0, _concat["default"])(_context = "server is running on ".concat(_index["default"].HOST, ":")).call(_context, _index["default"].PORT));
  console.log("NODE_ENV is ".concat(_index["default"].NODE_ENV));
});