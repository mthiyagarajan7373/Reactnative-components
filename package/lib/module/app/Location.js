"use strict";

import store from "../Store.js";
import { locationRequest, locationStatus, locationError } from "../redux/LocationRedux.js";
import * as Location from 'expo-location';
import { APP_KEY, DENIED, FAILED, GRANTED, LOCATION_DATA_UPDATE_FAILED, LOCATION_DATA_UPDATE_SUCCESSFULLY, LOCATION_PERMISSION_NOT_GRANTED, M_ID, NO_INTERNET_CONNECTION, SUCCEEDED, UNDETERMINED, UNKNOWN, UNKNOWN_ERROR } from "../constants/Constants.js";
import NetInfo from '@react-native-community/netinfo';
import AsyncStorage from '@react-native-async-storage/async-storage';
/**
 * Checks and requests location permissions using Expo Location.
 * @returns {Promise<string>} The status of the location permission (e.g., "granted", "denied", "undetermined").
 */
export const checkLocation = async () => {
  try {
    const {
      status
    } = await Location.getForegroundPermissionsAsync();
    if (status === GRANTED) {
      return GRANTED;
    }
    if (status === DENIED || status === UNDETERMINED) {
      const {
        status: newStatus
      } = await Location.requestForegroundPermissionsAsync();
      return newStatus;
    }
    return UNKNOWN;
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
export const getLocation = async () => {
  try {
    const netInfo = await NetInfo.fetch();
    if (!netInfo.isConnected) {
      return {
        status: false,
        message: NO_INTERNET_CONNECTION,
        data: null
      };
    }
    const {
      status
    } = await Location.getForegroundPermissionsAsync();
    if (status !== GRANTED) {
      return {
        status: false,
        message: LOCATION_PERMISSION_NOT_GRANTED,
        data: null
      };
    }
    const location = await Location.getCurrentPositionAsync({});
    const appKey = await AsyncStorage.getItem(APP_KEY);
    const mID = await AsyncStorage.getItem(M_ID);
    const locationData = {
      appkey: appKey || '',
      mid: mID || '',
      lat: location.coords.latitude.toString(),
      lon: location.coords.longitude.toString(),
      accuracy: location.coords.accuracy?.toString() || ''
    };
    await store.dispatch(locationRequest(locationData));
    const state = store.getState();
    const statusRes = locationStatus(state);
    const errorMsg = locationError(state);
    if (statusRes === SUCCEEDED) {
      return {
        status: true,
        message: LOCATION_DATA_UPDATE_SUCCESSFULLY,
        data: location
      };
    } else if (statusRes === FAILED) {
      return {
        status: false,
        message: errorMsg || LOCATION_DATA_UPDATE_FAILED,
        data: null
      };
    }
    return {
      status: false,
      message: UNKNOWN_ERROR,
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
//# sourceMappingURL=Location.js.map