"use strict";

import { Alert, Dimensions, Platform } from "react-native";
import * as Application from "expo-application";
import * as Device from "expo-device";
import * as ExpoTrackingTransparency from "expo-tracking-transparency";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AD_ID, ADS_LAYOUT, CAMPAIGN_ID, IS_AD_ACTIVE } from "../constants/Constants.js";
import { sendImpression } from "rn-foot-prints-tracking";
export const getDeviceID = async () => {
  let deviceID = "";
  if (Platform.OS === "android") {
    deviceID = Application.getAndroidId() || "";
  } else if (Platform.OS === "ios") {
    deviceID = (await Application.getIosIdForVendorAsync()) || "";
  }
  return deviceID;
};
export const getDeviceType = async () => {
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
export const getDeviceOs = () => {
  return Device.osName + " " + Device.osVersion;
};
export const getAdID = () => {
  return ExpoTrackingTransparency.getAdvertisingId() ?? "";
};
export const UseVisibility = () => {
  const onAdsLayout = async event => {
    const layout = event.nativeEvent.layout;
    await AsyncStorage.setItem(ADS_LAYOUT, JSON.stringify(layout));
  };
  const onImpressionScroll = async event => {
    const scrollY = event.nativeEvent.contentOffset.y;
    const windowHeight = Dimensions.get("window").height;
    const adLayout = (await AsyncStorage.getItem(ADS_LAYOUT)) ?? "";
    const active = (await AsyncStorage.getItem(IS_AD_ACTIVE)) ?? "false";
    const layout = JSON.parse(adLayout);
    const isActive = JSON.parse(active);
    if (layout) {
      const isAdInView = scrollY + windowHeight >= layout.y + 70 && scrollY <= layout.y + layout.height;
      if (isAdInView) {
        console.log(isActive);
        if (!isActive) {
          await AsyncStorage.setItem(IS_AD_ACTIVE, JSON.stringify(true));
          const campaignId = (await AsyncStorage.getItem(CAMPAIGN_ID)) ?? "";
          const adId = (await AsyncStorage.getItem(AD_ID)) ?? "";
          if (adId !== "" && campaignId !== "") {
            const result = await sendImpression("visit", "action", campaignId, adId);
            if (result.status) {
              showAlert("Alert!", `${result.message}\n\ncampaignId: ${campaignId}\nadId: ${adId}`);
            }
          }
        }
      } else {
        await AsyncStorage.setItem(IS_AD_ACTIVE, JSON.stringify(false));
      }
    }
  };
  return {
    onAdsLayout,
    onImpressionScroll
  };
};
const showAlert = (title, body) => {
  Alert.alert(title, body, [{
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
export const isVideo = url => {
  const videoExtensions = ["mp4", "mov", "avi", "mkv"];
  return videoExtensions.some(ext => url?.toLowerCase().endsWith(ext));
};
//# sourceMappingURL=Utils.js.map