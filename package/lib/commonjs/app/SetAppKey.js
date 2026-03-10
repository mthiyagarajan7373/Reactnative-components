"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UseSetClientKey = void 0;
var _Store = _interopRequireDefault(require("../Store.js"));
var _AuthRedux = require("../redux/AuthRedux.js");
var _asyncStorage = _interopRequireDefault(require("@react-native-async-storage/async-storage"));
var _netinfo = _interopRequireDefault(require("@react-native-community/netinfo"));
var _reactNative = require("react-native");
var _Constants = require("../constants/Constants.js");
var _Utils = require("../utils/Utils.js");
var _Ads = require("./Ads.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const UseSetClientKey = () => {
  const setClient = async (appKey, pushNotificationToken, additionalData) => {
    const netInfo = await _netinfo.default.fetch();
    const {
      width,
      height
    } = _reactNative.Dimensions.get('window');
    if (!netInfo.isConnected) {
      return {
        status: false,
        message: _Constants.NO_INTERNET_CONNECTION,
        data: null
      };
    }
    try {
      // const mid = (await AsyncStorage.getItem(M_ID)) ?? '';
      // const pushNotificationToken =
      //   (await AsyncStorage.getItem(FCM_TOKEN)) ?? '';
      const deviceID = await (0, _Utils.getDeviceID)();
      const deviceType = await (0, _Utils.getDeviceType)();
      const platform = (0, _Utils.getDeviceOs)();
      const advertisingId = await (0, _Ads.gettingAdID)();
      const roundedWidth = Math.round(width);
      const roundedHeight = Math.round(height);
      const deviceInfo = {
        appkey: appKey,
        // mid: mid,
        pushNotificationToken: pushNotificationToken,
        technicalInfo: {
          screenSize: `${roundedWidth}x${roundedHeight}`,
          deviceType: deviceType,
          deviceOs: platform,
          deviceUuid: deviceID,
          iosAdvertisingId: _reactNative.Platform.OS === 'ios' ? advertisingId.data : '',
          androidAdvertisingId: _reactNative.Platform.OS === 'android' ? advertisingId.data : ''
        },
        additionalData: additionalData
      };
      await _Store.default.dispatch((0, _AuthRedux.authRequest)(deviceInfo));
      const state = _Store.default.getState();
      const status = (0, _AuthRedux.authStatus)(state);
      const errorMsg = (0, _AuthRedux.authError)(state);
      const response = (0, _AuthRedux.authResponse)(state);
      if (status === _Constants.SUCCEEDED) {
        await _asyncStorage.default.setItem(_Constants.IS_CLIENT, JSON.stringify(true));
        await _asyncStorage.default.setItem(_Constants.APP_KEY, appKey);
        await _asyncStorage.default.setItem(_Constants.M_ID, response.mobileId);
        const responseData = {
          mid: response.mobileId,
          screenSize: deviceInfo.technicalInfo.screenSize,
          deviceType: deviceInfo.technicalInfo.deviceType,
          deviceOs: deviceInfo.technicalInfo.deviceOs,
          deviceUuid: deviceInfo.technicalInfo.deviceUuid,
          iosAdvertisingId: deviceInfo.technicalInfo.iosAdvertisingId,
          androidAdvertisingId: deviceInfo.technicalInfo.androidAdvertisingId
        };
        return {
          status: true,
          message: _Constants.SUCCESS_MSG_APP_KEY,
          data: responseData
        };
      } else if (status === _Constants.FAILED) {
        await _asyncStorage.default.setItem(_Constants.IS_CLIENT, JSON.stringify(false));
        return {
          status: false,
          message: errorMsg || _Constants.APP_KEY_VALIDATION_FAILED,
          data: null
        };
      }
      await _asyncStorage.default.setItem(_Constants.IS_CLIENT, JSON.stringify(false));
      return {
        status: false,
        message: _Constants.UNEXPECTED_AUTH_PROCESS,
        data: null
      };
    } catch (error) {
      await _asyncStorage.default.setItem(_Constants.IS_CLIENT, JSON.stringify(false));
      return {
        status: false,
        message: `${error.message}`,
        data: null
      };
    }
  };
  return {
    setClient
  };
};
exports.UseSetClientKey = UseSetClientKey;
//# sourceMappingURL=SetAppKey.js.map