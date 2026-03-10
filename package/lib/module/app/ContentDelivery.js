"use strict";

import store from "../Store.js";
import { contentDeliveryReq, contentDeliveryResponse, contentDeliveryStatus, contentDeliveryError } from "../redux/ContentDeliveryRedux.js";
import AsyncStorage from '@react-native-async-storage/async-storage';
import NetInfo from '@react-native-community/netinfo';
import { AN_UNEXPECTED_ERR_OCCUR, APP_KEY, CONTENT_DELIVERY_DATA_FAILED, CONTENT_DELIVERY_DATA_SUCCESS, FAILED, M_ID, NO_INTERNET_CONNECTION, SUCCEEDED, UNKNOWN_ERROR } from "../constants/Constants.js";
/**
 * Fetches content delivery data, handling network and state errors.
 * @returns {Promise<ContentDeliveryResponse>} Response object with status, message, and data.
 */
export const contentDelivery = async () => {
  try {
    const netInfo = await NetInfo.fetch();
    if (!netInfo.isConnected) {
      return {
        status: false,
        message: NO_INTERNET_CONNECTION,
        data: null
      };
    }
    const mid = (await AsyncStorage.getItem(M_ID)) ?? '';
    const appKey = (await AsyncStorage.getItem(APP_KEY)) ?? '';
    const inputParams = {
      appkey: appKey,
      mid: mid
    };
    await store.dispatch(contentDeliveryReq(inputParams));
    const state = store.getState();
    const status = contentDeliveryStatus(state);
    const errorMsg = contentDeliveryError(state);
    const response = contentDeliveryResponse(state);
    if (status === SUCCEEDED) {
      const data = response.data;
      return {
        status: true,
        message: CONTENT_DELIVERY_DATA_SUCCESS,
        data: data
      };
    } else if (status === FAILED) {
      return {
        status: false,
        message: errorMsg || CONTENT_DELIVERY_DATA_FAILED,
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
      message: error?.message || AN_UNEXPECTED_ERR_OCCUR,
      data: null
    };
  }
};
//# sourceMappingURL=ContentDelivery.js.map