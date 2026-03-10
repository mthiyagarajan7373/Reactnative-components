"use strict";

import { APP_KEY, FAILED, M_ID, NO_INTERNET_CONNECTION, REACH_TRACK_ERROR, REACH_TRACK_SUCCESS, SUCCEEDED, UNKNOWN_ERROR } from "../constants/Constants.js";
import store from "../Store.js";
import NetInfo from '@react-native-community/netinfo';
import { reachError, reachReq, reachStatus } from "../redux/ReachRedux.js";
import AsyncStorage from '@react-native-async-storage/async-storage';
/**
 * Track user opening the app.
 */
export const trackAppOpen = async (actionType, requestType) => {
  try {
    const netInfo = await NetInfo.fetch();
    if (!netInfo.isConnected) {
      return {
        status: false,
        message: NO_INTERNET_CONNECTION
      };
    }
    const appKey = (await AsyncStorage.getItem(APP_KEY)) ?? '';
    const mid = (await AsyncStorage.getItem(M_ID)) ?? '';
    const inputParams = {
      appkey: appKey,
      mid: mid,
      actionType: actionType,
      requestType: requestType
    };
    await store.dispatch(reachReq(inputParams));
    const state = store.getState();
    const status = reachStatus(state);
    const errorMsg = reachError(state);
    if (status === SUCCEEDED) {
      return {
        status: true,
        message: REACH_TRACK_SUCCESS
      };
    } else if (status === FAILED) {
      return {
        status: false,
        message: errorMsg || REACH_TRACK_ERROR
      };
    }
    return {
      status: false,
      message: UNKNOWN_ERROR
    };
  } catch (error) {
    return {
      status: false,
      message: `${error.message}`
    };
  }
};
//# sourceMappingURL=Reach.js.map