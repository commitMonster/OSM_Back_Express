"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.fail = exports.cancel = exports.success = exports.request = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs3/regenerator"));

var _concat = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/concat"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/asyncToGenerator"));

var _axios = _interopRequireDefault(require("axios"));

var _qs = _interopRequireDefault(require("qs"));

var _configs = _interopRequireDefault(require("../configs"));

var request = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var _context, _context2, _context3, headers, data, kakaoRequest;

    return _regenerator["default"].wrap(function _callee$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            headers = {
              'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
              Authorization: "KakaoAK ".concat(_configs["default"].ADMIN_KEY)
            };
            data = _qs["default"].stringify({
              cid: 'TC0ONETIME',
              partner_order_id: '00000001',
              partner_user_id: 'test_user',
              item_name: 'SeoulTech SE',
              quantity: 1,
              total_amount: req.body.prise,
              tax_free_amount: req.body.prise,
              approval_url: (0, _concat["default"])(_context = "".concat(_configs["default"].HOST, ":")).call(_context, _configs["default"].PORT, "/pay/success"),
              cancel_url: (0, _concat["default"])(_context2 = "".concat(_configs["default"].HOST, ":")).call(_context2, _configs["default"].PORT, "/pay/cancel"),
              fail_url: (0, _concat["default"])(_context3 = "".concat(_configs["default"].HOST, ":")).call(_context3, _configs["default"].PORT, "/pay/cancel")
            });
            _context4.next = 5;
            return (0, _axios["default"])({
              url: 'https://kapi.kakao.com/v1/payment/ready',
              method: 'POST',
              headers: headers,
              data: data
            });

          case 5:
            kakaoRequest = _context4.sent;
            res.redirect(kakaoRequest.data.next_redirect_pc_url);
            _context4.next = 13;
            break;

          case 9:
            _context4.prev = 9;
            _context4.t0 = _context4["catch"](0);
            console.error(_context4.t0);
            next(_context4.t0);

          case 13:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee, null, [[0, 9]]);
  }));

  return function request(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.request = request;

var success = function success(req, res) {
  res.send('Payment Success!');
};

exports.success = success;

var cancel = function cancel(req, res) {
  res.send('Payment Canceled... -_-;;');
};

exports.cancel = cancel;

var fail = function fail(req, res) {
  res.send('Payment Failed... T_T');
};

exports.fail = fail;