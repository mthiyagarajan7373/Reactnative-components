"use strict";

import * as ExpoTrackingTransparency from 'expo-tracking-transparency';
import { AD_ID_ERROR, AD_ID_SUCCESS, AN_UNEXPECTED_ERR_OCCUR } from "../constants/Constants.js";
import { getAdID } from "../utils/Utils.js";
export const gettingAdID = async () => {
  try {
    const {
      granted
    } = await ExpoTrackingTransparency.requestTrackingPermissionsAsync();
    if (granted) {
      const adID = getAdID();
      console.log(`adID:::::: ${adID}`);
      return {
        status: false,
        message: AD_ID_SUCCESS,
        data: adID
      };
    } else {
      return {
        status: false,
        message: AD_ID_ERROR || AN_UNEXPECTED_ERR_OCCUR,
        data: ''
      };
    }
  } catch (error) {
    return {
      status: false,
      message: error?.message || AN_UNEXPECTED_ERR_OCCUR,
      data: ''
    };
  }
};
//# sourceMappingURL=Ads.js.map