"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _toolkit = require("@reduxjs/toolkit");
var _AuthRedux = _interopRequireDefault(require("./redux/AuthRedux.js"));
var _LocationRedux = _interopRequireDefault(require("./redux/LocationRedux.js"));
var _ContentDeliveryRedux = _interopRequireDefault(require("./redux/ContentDeliveryRedux.js"));
var _ReachRedux = _interopRequireDefault(require("./redux/ReachRedux.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const store = (0, _toolkit.configureStore)({
  reducer: {
    auth: _AuthRedux.default,
    location: _LocationRedux.default,
    contentDelivery: _ContentDeliveryRedux.default,
    reach: _ReachRedux.default
  }
});
var _default = exports.default = store;
//# sourceMappingURL=Store.js.map