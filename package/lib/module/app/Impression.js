"use strict";

import { APP_KEY, FAILED, IMPRESSION_TRACK_ERROR, IMPRESSION_TRACK_SUCCESS, M_ID, NO_INTERNET_CONNECTION, SUCCEEDED, UNKNOWN_ERROR } from "../constants/Constants.js";
import store from "../Store.js";
import NetInfo from '@react-native-community/netinfo';
import { reachError, reachReq, reachStatus } from "../redux/ReachRedux.js";
import AsyncStorage from '@react-native-async-storage/async-storage';
/**
 * Track user opening the app.
 */
export const trackRefresh = async (actionType, requestType, campaignId, adId) => {
  try {
    const netInfo = await NetInfo.fetch();
    if (!netInfo.isConnected) {
      return {
        status: false,
        message: NO_INTERNET_CONNECTION,
        data: null
      };
    }
    const appKey = (await AsyncStorage.getItem(APP_KEY)) ?? '';
    const mid = (await AsyncStorage.getItem(M_ID)) ?? '';
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
    await store.dispatch(reachReq(inputParams));
    const state = store.getState();
    const status = reachStatus(state);
    const errorMsg = reachError(state);
    if (status === SUCCEEDED) {
      return {
        status: true,
        message: IMPRESSION_TRACK_SUCCESS,
        data: null
      };
    } else if (status === FAILED) {
      return {
        status: false,
        message: errorMsg || IMPRESSION_TRACK_ERROR,
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
      message: `${error.message}`,
      data: null
    };
  }
};
//# sourceMappingURL=Impression.js.map