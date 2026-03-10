"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.trackRefresh = void 0;
var _Constants = require("../constants/Constants.js");
var _Store = _interopRequireDefault(require("../Store.js"));
var _netinfo = _interopRequireDefault(require("@react-native-community/netinfo"));
var _ReachRedux = require("../redux/ReachRedux.js");
var _asyncStorage = _interopRequireDefault(require("@react-native-async-storage/async-storage"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/**
 * Track user opening the app.
 */
const trackRefresh = async (actionType, requestType, campaignId, adId) => {
  try {
    const netInfo = await _netinfo.default.fetch();
    if (!netInfo.isConnected) {
      return {
        status: false,
        message: _Constants.NO_INTERNET_CONNECTION,
        data: null
      };
    }
    const appKey = (await _asyncStorage.default.getItem(_Constants.APP_KEY)) ?? '';
    const mid = (await _asyncStorage.default.getItem(_Constants.M_ID)) ?? '';
    const inputParams = {
      appkey: appKey,
      mid: mid,
      actionType: actionType,
      requestType: requestType,
      additionalData: {
        campaignId: campaignId,
        adId: adId
      }
    };
    await _Store.default.dispatch((0, _ReachRedux.reachReq)(inputParams));
    const state = _Store.default.getState();
    const status = (0, _ReachRedux.reachStatus)(state);
    const errorMsg = (0, _ReachRedux.reachError)(state);
    if (status === _Constants.SUCCEEDED) {
      return {
        status: true,
        message: _Constants.IMPRESSION_TRACK_SUCCESS,
        data: null
      };
    } else if (status === _Constants.FAILED) {
      return {
        status: false,
        message: errorMsg || _Constants.IMPRESSION_TRACK_ERROR,
        data: null
      };
    }
    return {
      status: false,
      message: _Constants.UNKNOWN_ERROR,
      data: null
    };
  } catch (error) {
    return {
      status: false,
      message: `${error.message}`,
      data: null
    };
  }
};
exports.trackRefresh = trackRefresh;
//# sourceMappingURL=Impression.js.map