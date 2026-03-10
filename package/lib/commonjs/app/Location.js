"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLocation = exports.checkLocation = void 0;
var _Store = _interopRequireDefault(require("../Store.js"));
var _LocationRedux = require("../redux/LocationRedux.js");
var Location = _interopRequireWildcard(require("expo-location"));
var _Constants = require("../constants/Constants.js");
var _netinfo = _interopRequireDefault(require("@react-native-community/netinfo"));
var _asyncStorage = _interopRequireDefault(require("@react-native-async-storage/async-storage"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/**
 * Checks and requests location permissions using Expo Location.
 * @returns {Promise<string>} The status of the location permission (e.g., "granted", "denied", "undetermined").
 */
const checkLocation = async () => {
  try {
    const {
      status
    } = await Location.getForegroundPermissionsAsync();
    if (status === _Constants.GRANTED) {
      return _Constants.GRANTED;
    }
    if (status === _Constants.DENIED || status === _Constants.UNDETERMINED) {
      const {
        status: newStatus
      } = await Location.requestForegroundPermissionsAsync();
      return newStatus;
    }
    return _Constants.UNKNOWN;
  } catch (error) {
    throw new Error(error.message);
  }
};

/**
 * Gets the user's current location.
 *
 * This function ensures the location permission is granted.
 * If permission is not granted, it throws an error.
 * When granted, it fetches and returns the user's current location.
 *
 * @returns {Promise<Location.LocationObject>} The user's current location (latitude and longitude).
 */
exports.checkLocation = checkLocation;
const getLocation = async () => {
  try {
    const netInfo = await _netinfo.default.fetch();
    if (!netInfo.isConnected) {
      return {
        status: false,
        message: _Constants.NO_INTERNET_CONNECTION,
        data: null
      };
    }
    const {
      status
    } = await Location.getForegroundPermissionsAsync();
    if (status !== _Constants.GRANTED) {
      return {
        status: false,
        message: _Constants.LOCATION_PERMISSION_NOT_GRANTED,
        data: null
      };
    }
    const location = await Location.getCurrentPositionAsync({});
    const appKey = await _asyncStorage.default.getItem(_Constants.APP_KEY);
    const mID = await _asyncStorage.default.getItem(_Constants.M_ID);
    const locationData = {
      appkey: appKey || '',
      mid: mID || '',
      lat: location.coords.latitude.toString(),
      lon: location.coords.longitude.toString(),
      accuracy: location.coords.accuracy?.toString() || ''
    };
    await _Store.default.dispatch((0, _LocationRedux.locationRequest)(locationData));
    const state = _Store.default.getState();
    const statusRes = (0, _LocationRedux.locationStatus)(state);
    const errorMsg = (0, _LocationRedux.locationError)(state);
    if (statusRes === _Constants.SUCCEEDED) {
      return {
        status: true,
        message: _Constants.LOCATION_DATA_UPDATE_SUCCESSFULLY,
        data: location
      };
    } else if (statusRes === _Constants.FAILED) {
      return {
        status: false,
        message: errorMsg || _Constants.LOCATION_DATA_UPDATE_FAILED,
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
      message: error.message,
      data: null
    };
  }
};
exports.getLocation = getLocation;
//# sourceMappingURL=Location.js.map