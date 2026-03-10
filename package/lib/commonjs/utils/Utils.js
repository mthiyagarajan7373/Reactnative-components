"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isVideo = exports.getDeviceType = exports.getDeviceOs = exports.getDeviceID = exports.getAdID = exports.UseVisibility = void 0;
var _reactNative = require("react-native");
var Application = _interopRequireWildcard(require("expo-application"));
var Device = _interopRequireWildcard(require("expo-device"));
var ExpoTrackingTransparency = _interopRequireWildcard(require("expo-tracking-transparency"));
var _asyncStorage = _interopRequireDefault(require("@react-native-async-storage/async-storage"));
var _Constants = require("../constants/Constants.js");
var _rnFootPrintsTracking = require("rn-foot-prints-tracking");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const getDeviceID = async () => {
  let deviceID = "";
  if (_reactNative.Platform.OS === "android") {
    deviceID = Application.getAndroidId() || "";
  } else if (_reactNative.Platform.OS === "ios") {
    deviceID = (await Application.getIosIdForVendorAsync()) || "";
  }
  return deviceID;
};
exports.getDeviceID = getDeviceID;
const getDeviceType = async () => {
  const deviceType = await Device.getDeviceTypeAsync();
  if (deviceType === Device.DeviceType.PHONE) {
    return "PHONE";
  } else if (deviceType === Device.DeviceType.TABLET) {
    return "TABLET";
  } else if (deviceType === Device.DeviceType.TV) {
    return "TV";
  } else {
    return "DESKTOP";
  }
};
exports.getDeviceType = getDeviceType;
const getDeviceOs = () => {
  return Device.osName + " " + Device.osVersion;
};
exports.getDeviceOs = getDeviceOs;
const getAdID = () => {
  return ExpoTrackingTransparency.getAdvertisingId() ?? "";
};
exports.getAdID = getAdID;
const UseVisibility = () => {
  const onAdsLayout = async event => {
    const layout = event.nativeEvent.layout;
    await _asyncStorage.default.setItem(_Constants.ADS_LAYOUT, JSON.stringify(layout));
  };
  const onImpressionScroll = async event => {
    const scrollY = event.nativeEvent.contentOffset.y;
    const windowHeight = _reactNative.Dimensions.get("window").height;
    const adLayout = (await _asyncStorage.default.getItem(_Constants.ADS_LAYOUT)) ?? "";
    const active = (await _asyncStorage.default.getItem(_Constants.IS_AD_ACTIVE)) ?? "false";
    const layout = JSON.parse(adLayout);
    const isActive = JSON.parse(active);
    if (layout) {
      const isAdInView = scrollY + windowHeight >= layout.y + 70 && scrollY <= layout.y + layout.height;
      if (isAdInView) {
        console.log(isActive);
        if (!isActive) {
          await _asyncStorage.default.setItem(_Constants.IS_AD_ACTIVE, JSON.stringify(true));
          const campaignId = (await _asyncStorage.default.getItem(_Constants.CAMPAIGN_ID)) ?? "";
          const adId = (await _asyncStorage.default.getItem(_Constants.AD_ID)) ?? "";
          if (adId !== "" && campaignId !== "") {
            const result = await (0, _rnFootPrintsTracking.sendImpression)("visit", "action", campaignId, adId);
            if (result.status) {
              showAlert("Alert!", `${result.message}\n\ncampaignId: ${campaignId}\nadId: ${adId}`);
            }
          }
        }
      } else {
        await _asyncStorage.default.setItem(_Constants.IS_AD_ACTIVE, JSON.stringify(false));
      }
    }
  };
  return {
    onAdsLayout,
    onImpressionScroll
  };
};
exports.UseVisibility = UseVisibility;
const showAlert = (title, body) => {
  _reactNative.Alert.alert(title, body, [{
    text: "Cancel",
    onPress: () => console.log("Cancel Pressed"),
    style: "cancel"
  }, {
    text: "OK",
    onPress: () => {}
  }], {
    cancelable: true
  });
};
const isVideo = url => {
  const videoExtensions = ["mp4", "mov", "avi", "mkv"];
  return videoExtensions.some(ext => url?.toLowerCase().endsWith(ext));
};
exports.isVideo = isVideo;
//# sourceMappingURL=Utils.js.map