"use strict";

import store from "../Store.js";
import { authError, authRequest, authResponse, authStatus } from "../redux/AuthRedux.js";
import AsyncStorage from '@react-native-async-storage/async-storage';
import NetInfo from '@react-native-community/netinfo';
import { Dimensions, Platform } from 'react-native';
import { APP_KEY, APP_KEY_VALIDATION_FAILED, FAILED, IS_CLIENT, M_ID, NO_INTERNET_CONNECTION, SUCCEEDED, SUCCESS_MSG_APP_KEY, UNEXPECTED_AUTH_PROCESS } from "../constants/Constants.js";
import { getDeviceID, getDeviceOs, getDeviceType } from "../utils/Utils.js";
import { gettingAdID } from "./Ads.js";
export const UseSetClientKey = () => {
  const setClient = async (appKey, pushNotificationToken, additionalData) => {
    const netInfo = await NetInfo.fetch();
    const {
      width,
      height
    } = Dimensions.get('window');
    if (!netInfo.isConnected) {
      return {
        status: false,
        message: NO_INTERNET_CONNECTION,
        data: null
      };
    }
    try {
      // const mid = (await AsyncStorage.getItem(M_ID)) ?? '';
      // const pushNotificationToken =
      //   (await AsyncStorage.getItem(FCM_TOKEN)) ?? '';
      const deviceID = await getDeviceID();
      const deviceType = await getDeviceType();
      const platform = getDeviceOs();
      const advertisingId = await gettingAdID();
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
          iosAdvertisingId: Platform.OS === 'ios' ? advertisingId.data : '',
          androidAdvertisingId: Platform.OS === 'android' ? advertisingId.data : ''
        },
        additionalData: additionalData
      };
      await store.dispatch(authRequest(deviceInfo));
      const state = store.getState();
      const status = authStatus(state);
      const errorMsg = authError(state);
      const response = authResponse(state);
      if (status === SUCCEEDED) {
        await AsyncStorage.setItem(IS_CLIENT, JSON.stringify(true));
        await AsyncStorage.setItem(APP_KEY, appKey);
        await AsyncStorage.setItem(M_ID, response.mobileId);
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
          message: SUCCESS_MSG_APP_KEY,
          data: responseData
        };
      } else if (status === FAILED) {
        await AsyncStorage.setItem(IS_CLIENT, JSON.stringify(false));
        return {
          status: false,
          message: errorMsg || APP_KEY_VALIDATION_FAILED,
          data: null
        };
      }
      await AsyncStorage.setItem(IS_CLIENT, JSON.stringify(false));
      return {
        status: false,
        message: UNEXPECTED_AUTH_PROCESS,
        data: null
      };
    } catch (error) {
      await AsyncStorage.setItem(IS_CLIENT, JSON.stringify(false));
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
//# sourceMappingURL=SetAppKey.js.map