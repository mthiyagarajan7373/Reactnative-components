"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setClientKey = exports.sendReach = exports.sendImpression = exports.sendFcmToken = exports.initializeDatabase = exports.getCurrentLocation = exports.getContentDeliveryInLocalDB = exports.getContentDelivery = exports.fetchCurrentLocationFromDB = exports.fetchAllLocationFromDB = exports.deleteTableInLocalDB = exports.checkLocationPermission = exports.VerticalAds = exports.ProductAds = exports.PixelScrollHandler = exports.LeadAds = exports.HorizontalAds = exports.DisplayAds = void 0;
var _asyncStorage = _interopRequireDefault(require("@react-native-async-storage/async-storage"));
var _Location = require("./app/Location.js");
var _Constants = require("./constants/Constants.js");
var _DbConfig = require("./db/config/DbConfig.js");
var _StoreDB = require("./db/store/StoreDB.js");
var _RetrieveDB = require("./db/retrieve/RetrieveDB.js");
var _DeleteDB = require("./db/delete/DeleteDB.js");
var _SetAppKey = require("./app/SetAppKey.js");
var _Config = require("./config/Config.js");
var _ContentDelivery = require("./app/ContentDelivery.js");
var _Reach = require("./app/Reach.js");
var _Impression = require("./app/Impression.js");
var _DisplayAd = require("./app/DisplayAd.js");
var _Utils = require("./utils/Utils.js");
var _react = require("react");
var _HorizontalAd = require("./app/HorizontalAd.js");
var _VerticalAd = require("./app/VerticalAd.js");
var _LeadAd = require("./app/LeadAd.js");
var _ProductAd = require("./app/ProductAd.js");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/**
 * Checks client validity.
 * @returns {Promise<boolean>} Whether the client is valid or not.
 */
const isClientValid = async () => {
  try {
    const value = await _asyncStorage.default.getItem(_Constants.IS_CLIENT);
    return value === 'true';
  } catch (error) {
    return false;
  }
};

/**
 * Sets the fcm token.
 */
const sendFcmToken = async fcmToken => {
  try {
    if (fcmToken === '') {
      return {
        status: false,
        message: `${_Constants.INVALID_FCM_TOKEN_ERR}`
      };
    }
    await _asyncStorage.default.setItem(_Constants.FCM_TOKEN, fcmToken);
    return {
      status: true,
      message: _Constants.SUCCESS_MSG_RECEIVE_FCM_TOKEN
    };
  } catch (error) {
    return {
      status: false,
      message: `${error.message}`
    };
  }
};

/**
 * Sets the client key and license key.
 */
exports.sendFcmToken = sendFcmToken;
const setClientKey = async (baseUrl, appKey, pushNotificationToken, additionalData) => {
  try {
    if (baseUrl === '' || appKey === '') {
      let missingValue = baseUrl === '' ? 'baseUrl' : 'appKey';
      return {
        status: false,
        message: `${missingValue} ${_Constants.MISSING_KEY_ERR} ${missingValue}.`
      };
    }
    (0, _Config.setServerConfig)(baseUrl);
    await _asyncStorage.default.setItem(_Constants.BASE_URL, baseUrl);
    const {
      setClient
    } = (0, _SetAppKey.UseSetClientKey)();
    const result = await setClient(appKey, pushNotificationToken, additionalData);
    if (result.status) {
      return {
        status: true,
        message: result.message,
        data: result.data,
        additionalData: additionalData
      };
    }
    return {
      status: false,
      message: result.message,
      additionalData: additionalData
    };
  } catch (error) {
    return {
      status: false,
      message: `${error.message}`
    };
  }
};

/**
 * Validates the client and initializes the database.
 */
exports.setClientKey = setClientKey;
const initializeDatabase = async () => {
  try {
    if (!(await isClientValid())) {
      return {
        status: false,
        message: _Constants.ERR_MSG_INIT
      };
    }
    await (0, _DbConfig.initDatabase)();
    return {
      status: true,
      message: _Constants.SUCCESS_MSG_INIT
    };
  } catch (error) {
    return {
      status: false,
      message: `${error.message}`
    };
  }
};

/**
 * Requests location permissions.
 */
exports.initializeDatabase = initializeDatabase;
const checkLocationPermission = async () => {
  try {
    if (!(await isClientValid())) {
      return {
        status: false,
        message: _Constants.ERR_MSG_CHECK_PERMISSION
      };
    }
    const status = await (0, _Location.checkLocation)();
    return {
      status: true,
      message: _Constants.SUCCESS_MSG_CHECK_PERMISSION,
      data: status
    };
  } catch (error) {
    return {
      status: false,
      message: `${error.message}`
    };
  }
};

/**
 * Gets the user's current location.
 */
exports.checkLocationPermission = checkLocationPermission;
const getCurrentLocation = async (storeInDB = false) => {
  try {
    if (!(await isClientValid())) {
      return {
        status: false,
        message: _Constants.ERR_MSG_GET_LOCATION,
        data: null
      };
    }
    const baseUrl = (await _asyncStorage.default.getItem(_Constants.BASE_URL)) ?? '';
    (0, _Config.setServerConfig)(baseUrl);
    const currentLocation = await (0, _Location.getLocation)();
    if (storeInDB && currentLocation.data !== null) {
      await (0, _StoreDB.storeLocationInDB)(JSON.stringify(currentLocation.data));
    }
    return currentLocation;
  } catch (error) {
    return {
      status: false,
      message: `${error.message}`,
      data: null
    };
  }
};

/**
 * Retrieves all location from the database.
 */
exports.getCurrentLocation = getCurrentLocation;
const fetchAllLocationFromDB = async () => {
  try {
    if (!(await isClientValid())) {
      return {
        status: false,
        message: _Constants.ERR_MSG_RETRIEVE_LOCATION,
        data: null
      };
    }
    return await (0, _RetrieveDB.getLocationInDB)();
  } catch (error) {
    return {
      status: false,
      message: `${error.message}`,
      data: null
    };
  }
};

/**
 * Retrieves current location from the database.
 */
exports.fetchAllLocationFromDB = fetchAllLocationFromDB;
const fetchCurrentLocationFromDB = async () => {
  try {
    if (!(await isClientValid())) {
      return {
        status: false,
        message: _Constants.ERR_MSG_RETRIEVE_LOCATION,
        data: null
      };
    }
    return await (0, _RetrieveDB.getLastLocationInDB)();
  } catch (error) {
    return {
      status: false,
      message: `${error.message}`,
      data: null
    };
  }
};

/**
 * Delete a table in the database.
 */
exports.fetchCurrentLocationFromDB = fetchCurrentLocationFromDB;
const deleteTableInLocalDB = async tableName => {
  try {
    if (!(await isClientValid())) {
      return {
        status: false,
        message: _Constants.ERR_MSG_DELETE_LOCATION_TABLE
      };
    }
    return await (0, _DeleteDB.deleteTableInDB)(tableName);
  } catch (error) {
    return {
      status: false,
      message: `${error.message}`
    };
  }
};

/**
 * Get the content delivery data.
 */
exports.deleteTableInLocalDB = deleteTableInLocalDB;
const getContentDelivery = async (storeInDB = false) => {
  try {
    if (!(await isClientValid())) {
      return {
        status: false,
        message: _Constants.ERR_MSG_CONTENT_DELIVERY,
        data: null
      };
    }
    const baseUrl = (await _asyncStorage.default.getItem(_Constants.BASE_URL)) ?? '';
    (0, _Config.setServerConfig)(baseUrl);
    const response = await (0, _ContentDelivery.contentDelivery)();
    if (storeInDB && response.data !== null) {
      await (0, _StoreDB.storeContentDeliveryInDB)(JSON.stringify(response.data));
    }
    return response;
  } catch (error) {
    return {
      status: false,
      message: `${error.message}`,
      data: null
    };
  }
};

/**
 * Retrieves content delivery from the database.
 */
exports.getContentDelivery = getContentDelivery;
const getContentDeliveryInLocalDB = async () => {
  try {
    if (!(await isClientValid())) {
      return {
        status: false,
        message: _Constants.ERR_MSG_RETRIEVE_LOCATION,
        data: null
      };
    }
    return await (0, _RetrieveDB.getContentDeliveryInDB)();
  } catch (error) {
    return {
      status: false,
      message: `${error.message}`,
      data: null
    };
  }
};

/**
 * Track user opening the app.
 */
exports.getContentDeliveryInLocalDB = getContentDeliveryInLocalDB;
const sendReach = async (actionType, requestType) => {
  try {
    if (!(await isClientValid())) {
      return {
        status: false,
        message: _Constants.ERR_MSG_CONTENT_DELIVERY
      };
    }
    const baseUrl = (await _asyncStorage.default.getItem(_Constants.BASE_URL)) ?? '';
    (0, _Config.setServerConfig)(baseUrl);
    return await (0, _Reach.trackAppOpen)(actionType, requestType);
  } catch (error) {
    return {
      status: false,
      message: `${error.message}`
    };
  }
};
exports.sendReach = sendReach;
const sendImpression = async (actionType = 'visit', requestType = 'action', campaignId, adId) => {
  try {
    if (!(await isClientValid())) {
      return {
        status: false,
        message: _Constants.ERR_MSG_CONTENT_DELIVERY,
        data: null
      };
    }
    console.log('impression::::::', sendImpression);
    const baseUrl = (await _asyncStorage.default.getItem(_Constants.BASE_URL)) ?? '';
    (0, _Config.setServerConfig)(baseUrl);
    return await (0, _Impression.trackRefresh)(actionType, requestType, campaignId, adId);
  } catch (error) {
    return {
      status: false,
      message: `${error.message}`,
      data: null
    };
  }
};
exports.sendImpression = sendImpression;
const PixelScrollHandler = ({
  event
}) => {
  const {
    onImpressionScroll
  } = (0, _Utils.UseVisibility)();
  (0, _react.useEffect)(() => {
    if (event) {
      onImpressionScroll(event);
    }
  }, [event, onImpressionScroll]);
  return null;
};

/**
 * Display Ad user interface
 */
exports.PixelScrollHandler = PixelScrollHandler;
const DisplayAds = props => /*#__PURE__*/(0, _jsxRuntime.jsx)(_DisplayAd.DisplayAd, {
  ...props
});

/**
 * Horizontal Ad user interface
 */
exports.DisplayAds = DisplayAds;
const HorizontalAds = props => /*#__PURE__*/(0, _jsxRuntime.jsx)(_HorizontalAd.HorizontalAd, {
  ...props
});

/**
 * Vertical Ad user interface
 */
exports.HorizontalAds = HorizontalAds;
const VerticalAds = props => /*#__PURE__*/(0, _jsxRuntime.jsx)(_VerticalAd.VerticalAd, {
  ...props
});

/**
 * Lead Ad user interface
 */
exports.VerticalAds = VerticalAds;
const LeadAds = props => /*#__PURE__*/(0, _jsxRuntime.jsx)(_LeadAd.LeadAd, {
  ...props
});

/**
 * Produc Ad user interface
 */
exports.LeadAds = LeadAds;
const ProductAds = props => /*#__PURE__*/(0, _jsxRuntime.jsx)(_ProductAd.ProductAd, {
  ...props
});
exports.ProductAds = ProductAds;
//# sourceMappingURL=index.js.map