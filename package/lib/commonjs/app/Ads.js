"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.gettingAdID = void 0;
var ExpoTrackingTransparency = _interopRequireWildcard(require("expo-tracking-transparency"));
var _Constants = require("../constants/Constants.js");
var _Utils = require("../utils/Utils.js");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const gettingAdID = async () => {
  try {
    const {
      granted
    } = await ExpoTrackingTransparency.requestTrackingPermissionsAsync();
    if (granted) {
      const adID = (0, _Utils.getAdID)();
      console.log(`adID:::::: ${adID}`);
      return {
        status: false,
        message: _Constants.AD_ID_SUCCESS,
        data: adID
      };
    } else {
      return {
        status: false,
        message: _Constants.AD_ID_ERROR || _Constants.AN_UNEXPECTED_ERR_OCCUR,
        data: ''
      };
    }
  } catch (error) {
    return {
      status: false,
      message: error?.message || _Constants.AN_UNEXPECTED_ERR_OCCUR,
      data: ''
    };
  }
};
exports.gettingAdID = gettingAdID;
//# sourceMappingURL=Ads.js.map