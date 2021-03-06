"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var _cors = _interopRequireDefault(require("cors"));

var _express = _interopRequireDefault(require("express"));

var _expressSession = _interopRequireDefault(require("express-session"));

var _morgan = _interopRequireDefault(require("morgan"));

var _passport = _interopRequireDefault(require("passport"));

var _configs = _interopRequireDefault(require("./configs"));

var _passport2 = _interopRequireDefault(require("./configs/passport"));

var _AuthController = _interopRequireDefault(require("./controllers/AuthController"));

var _BannerController = _interopRequireDefault(require("./controllers/BannerController"));

var _BasketController = _interopRequireDefault(require("./controllers/BasketController"));

var _DestinationController = _interopRequireDefault(require("./controllers/DestinationController"));

var _ImageController = _interopRequireDefault(require("./controllers/ImageController"));

var _PayController = _interopRequireDefault(require("./controllers/PayController"));

var _ProductController = _interopRequireDefault(require("./controllers/ProductController"));

var _ErrorHandler = require("./middlewares/ErrorHandler");

var app = (0, _express["default"])();
(0, _passport2["default"])(_passport["default"]); // App middleware

app.use((0, _cors["default"])());
app.use(_bodyParser["default"].json());
app.use(_bodyParser["default"].urlencoded({
  extended: true
}));
app.use((0, _morgan["default"])('common'));
app.use((0, _cookieParser["default"])(_configs["default"].COOKIE_SECRET));
app.use((0, _expressSession["default"])({
  secret: _configs["default"].COOKIE_SECRET,
  resave: false,
  saveUninitialized: false
}));
app.use(_passport["default"].initialize());
app.use(_passport["default"].session()); // Add router

app.use('/images', _ImageController["default"]);
app.use('/auth', _AuthController["default"]);
app.use('/banner', _BannerController["default"]);
app.use('/product', _ProductController["default"]);
app.use('/basket', _BasketController["default"]);
app.use('/destination', _DestinationController["default"]);
app.use('/pay', _PayController["default"]);
app.use(_ErrorHandler.logHandler);
app.use(_ErrorHandler.errorHandler);
var _default = app;
exports["default"] = _default;