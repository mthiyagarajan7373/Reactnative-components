"use strict";

import AsyncStorage from '@react-native-async-storage/async-storage';
import { checkLocation, getLocation } from "./app/Location.js";
import { BASE_URL, ERR_MSG_CHECK_PERMISSION, ERR_MSG_CONTENT_DELIVERY, ERR_MSG_DELETE_LOCATION_TABLE, ERR_MSG_GET_LOCATION, ERR_MSG_INIT, ERR_MSG_RETRIEVE_LOCATION, FCM_TOKEN, INVALID_FCM_TOKEN_ERR, IS_CLIENT, MISSING_KEY_ERR, SUCCESS_MSG_CHECK_PERMISSION, SUCCESS_MSG_INIT, SUCCESS_MSG_RECEIVE_FCM_TOKEN } from "./constants/Constants.js";
import { initDatabase } from "./db/config/DbConfig.js";
import { storeContentDeliveryInDB, storeLocationInDB } from "./db/store/StoreDB.js";
import { getContentDeliveryInDB, getLastLocationInDB, getLocationInDB } from "./db/retrieve/RetrieveDB.js";
import { deleteTableInDB } from "./db/delete/DeleteDB.js";
import { UseSetClientKey } from "./app/SetAppKey.js";
import { setServerConfig } from "./config/Config.js";
import { contentDelivery } from "./app/ContentDelivery.js";
import { trackAppOpen } from "./app/Reach.js";
import { trackRefresh } from "./app/Impression.js";
import { DisplayAd } from "./app/DisplayAd.js";
import { UseVisibility } from "./utils/Utils.js";
import { useEffect } from 'react';
import { HorizontalAd } from "./app/HorizontalAd.js";
import { VerticalAd } from "./app/VerticalAd.js";
import { LeadAd } from "./app/LeadAd.js";
import { ProductAd } from "./app/ProductAd.js";
import { jsx as _jsx } from "react/jsx-runtime";
/**
 * Checks client validity.
 * @returns {Promise<boolean>} Whether the client is valid or not.
 */
const isClientValid = async () => {
  try {
    const value = await AsyncStorage.getItem(IS_CLIENT);
    return value === 'true';
  } catch (error) {
    return false;
  }
};

/**
 * Sets the fcm token.
 */
export const sendFcmToken = async fcmToken => {
  try {
    if (fcmToken === '') {
      return {
        status: false,
        message: `${INVALID_FCM_TOKEN_ERR}`
      };
    }
    await AsyncStorage.setItem(FCM_TOKEN, fcmToken);
    return {
      status: true,
      message: SUCCESS_MSG_RECEIVE_FCM_TOKEN
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
export const setClientKey = async (baseUrl, appKey, pushNotificationToken, additionalData) => {
  try {
    if (baseUrl === '' || appKey === '') {
      let missingValue = baseUrl === '' ? 'baseUrl' : 'appKey';
      return {
        status: false,
        message: `${missingValue} ${MISSING_KEY_ERR} ${missingValue}.`
      };
    }
    setServerConfig(baseUrl);
    await AsyncStorage.setItem(BASE_URL, baseUrl);
    const {
      setClient
    } = UseSetClientKey();
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
export const initializeDatabase = async () => {
  try {
    if (!(await isClientValid())) {
      return {
        status: false,
        message: ERR_MSG_INIT
      };
    }
    await initDatabase();
    return {
      status: true,
      message: SUCCESS_MSG_INIT
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
export const checkLocationPermission = async () => {
  try {
    if (!(await isClientValid())) {
      return {
        status: false,
        message: ERR_MSG_CHECK_PERMISSION
      };
    }
    const status = await checkLocation();
    return {
      status: true,
      message: SUCCESS_MSG_CHECK_PERMISSION,
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
export const getCurrentLocation = async (storeInDB = false) => {
  try {
    if (!(await isClientValid())) {
      return {
        status: false,
        message: ERR_MSG_GET_LOCATION,
        data: null
      };
    }
    const baseUrl = (await AsyncStorage.getItem(BASE_URL)) ?? '';
    setServerConfig(baseUrl);
    const currentLocation = await getLocation();
    if (storeInDB && currentLocation.data !== null) {
      await storeLocationInDB(JSON.stringify(currentLocation.data));
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
export const fetchAllLocationFromDB = async () => {
  try {
    if (!(await isClientValid())) {
      return {
        status: false,
        message: ERR_MSG_RETRIEVE_LOCATION,
        data: null
      };
    }
    return await getLocationInDB();
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
export const fetchCurrentLocationFromDB = async () => {
  try {
    if (!(await isClientValid())) {
      return {
        status: false,
        message: ERR_MSG_RETRIEVE_LOCATION,
        data: null
      };
    }
    return await getLastLocationInDB();
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
export const deleteTableInLocalDB = async tableName => {
  try {
    if (!(await isClientValid())) {
      return {
        status: false,
        message: ERR_MSG_DELETE_LOCATION_TABLE
      };
    }
    return await deleteTableInDB(tableName);
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
export const getContentDelivery = async (storeInDB = false) => {
  try {
    if (!(await isClientValid())) {
      return {
        status: false,
        message: ERR_MSG_CONTENT_DELIVERY,
        data: null
      };
    }
    const baseUrl = (await AsyncStorage.getItem(BASE_URL)) ?? '';
    setServerConfig(baseUrl);
    const response = await contentDelivery();
    if (storeInDB && response.data !== null) {
      await storeContentDeliveryInDB(JSON.stringify(response.data));
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
export const getContentDeliveryInLocalDB = async () => {
  try {
    if (!(await isClientValid())) {
      return {
        status: false,
        message: ERR_MSG_RETRIEVE_LOCATION,
        data: null
      };
    }
    return await getContentDeliveryInDB();
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
export const sendReach = async (actionType, requestType) => {
  try {
    if (!(await isClientValid())) {
      return {
        status: false,
        message: ERR_MSG_CONTENT_DELIVERY
      };
    }
    const baseUrl = (await AsyncStorage.getItem(BASE_URL)) ?? '';
    setServerConfig(baseUrl);
    return await trackAppOpen(actionType, requestType);
  } catch (error) {
    return {
      status: false,
      message: `${error.message}`
    };
  }
};
export const sendImpression = async (actionType = 'visit', requestType = 'action', campaignId, adId) => {
  try {
    if (!(await isClientValid())) {
      return {
        status: false,
        message: ERR_MSG_CONTENT_DELIVERY,
        data: null
      };
    }
    console.log('impression::::::', sendImpression);
    const baseUrl = (await AsyncStorage.getItem(BASE_URL)) ?? '';
    setServerConfig(baseUrl);
    return await trackRefresh(actionType, requestType, campaignId, adId);
  } catch (error) {
    return {
      status: false,
      message: `${error.message}`,
      data: null
    };
  }
};
export const PixelScrollHandler = ({
  event
}) => {
  const {
    onImpressionScroll
  } = UseVisibility();
  useEffect(() => {
    if (event) {
      onImpressionScroll(event);
    }
  }, [event, onImpressionScroll]);
  return null;
};

/**
 * Display Ad user interface
 */
export const DisplayAds = props => /*#__PURE__*/_jsx(DisplayAd, {
  ...props
});

/**
 * Horizontal Ad user interface
 */
export const HorizontalAds = props => /*#__PURE__*/_jsx(HorizontalAd, {
  ...props
});

/**
 * Vertical Ad user interface
 */
export const VerticalAds = props => /*#__PURE__*/_jsx(VerticalAd, {
  ...props
});

/**
 * Lead Ad user interface
 */
export const LeadAds = props => /*#__PURE__*/_jsx(LeadAd, {
  ...props
});

/**
 * Produc Ad user interface
 */
export const ProductAds = props => /*#__PURE__*/_jsx(ProductAd, {
  ...props
});
//# sourceMappingURL=index.js.map