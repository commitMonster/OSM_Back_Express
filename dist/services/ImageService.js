"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.upload = exports.uploader = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs3/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/asyncToGenerator"));

var _now = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/date/now"));

var _map = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/map"));

var _multer = _interopRequireDefault(require("multer"));

var storage = _multer["default"].diskStorage({
  destination: function destination(req, file, cb) {
    cb(null, 'images/');
  },
  filename: function filename(req, file, cb) {
    cb(null, (0, _now["default"])() + file.originalname);
  }
});

var uploader = (0, _multer["default"])({
  storage: storage
});
exports.uploader = uploader;

var upload = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var _context;

    var filePaths;
    return _regenerator["default"].wrap(function _callee$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            filePaths = (0, _map["default"])(_context = req.files).call(_context, function (file) {
              return file.path;
            });
            res.send(filePaths);

          case 2:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee);
  }));

  return function upload(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.upload = upload;