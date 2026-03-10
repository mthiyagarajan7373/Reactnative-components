"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.contentDelivery = void 0;
var _Store = _interopRequireDefault(require("../Store.js"));
var _ContentDeliveryRedux = require("../redux/ContentDeliveryRedux.js");
var _asyncStorage = _interopRequireDefault(require("@react-native-async-storage/async-storage"));
var _netinfo = _interopRequireDefault(require("@react-native-community/netinfo"));
var _Constants = require("../constants/Constants.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/**
 * Fetches content delivery data, handling network and state errors.
 * @returns {Promise<ContentDeliveryResponse>} Response object with status, message, and data.
 */
const contentDelivery = async () => {
  try {
    const netInfo = await _netinfo.default.fetch();
    if (!netInfo.isConnected) {
      return {
        status: false,
        message: _Constants.NO_INTERNET_CONNECTION,
        data: null
      };
    }
    const mid = (await _asyncStorage.default.getItem(_Constants.M_ID)) ?? '';
    const appKey = (await _asyncStorage.default.getItem(_Constants.APP_KEY)) ?? '';
    const inputParams = {
      appkey: appKey,
      mid: mid
    };
    await _Store.default.dispatch((0, _ContentDeliveryRedux.contentDeliveryReq)(inputParams));
    const state = _Store.default.getState();
    const status = (0, _ContentDeliveryRedux.contentDeliveryStatus)(state);
    const errorMsg = (0, _ContentDeliveryRedux.contentDeliveryError)(state);
    const response = (0, _ContentDeliveryRedux.contentDeliveryResponse)(state);
    if (status === _Constants.SUCCEEDED) {
      const data = response.data;
      return {
        status: true,
        message: _Constants.CONTENT_DELIVERY_DATA_SUCCESS,
        data: data
      };
    } else if (status === _Constants.FAILED) {
      return {
        status: false,
        message: errorMsg || _Constants.CONTENT_DELIVERY_DATA_FAILED,
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
      message: error?.message || _Constants.AN_UNEXPECTED_ERR_OCCUR,
      data: null
    };
  }
};
exports.contentDelivery = contentDelivery;
//# sourceMappingURL=ContentDelivery.js.map