"use strict";

import React, { useEffect, useRef, useState } from 'react';
import { Dimensions, Image, Linking, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { Carousel } from 'react-native-snap-carousel-v4';
import { isVideo, UseVisibility } from "../utils/Utils.js";
import { ResizeMode, Video } from 'expo-av';
import { getContentDelivery, sendImpression } from 'rn-foot-prints-tracking';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AD_ID, CAMPAIGN_ID } from "../constants/Constants.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const {
  width: screenWidth
} = Dimensions.get('window');
export const VerticalAd = ({
  videoHeight = 400,
  imageHeight = 400,
  adLayoutBackgroundColor = '#f0f0f0',
  titleTextColor = '#000',
  descriptionTextColor = '#000',
  footerTextColor = '#000',
  titleTextSize = 24,
  descriptionTextSize = 16,
  footerTextSize = 16,
  buttonTextSize = 16,
  buttonTextColor = '#ffffff',
  buttonBackgroundColor = '#007bff',
  buttonBorderRadius = 5,
  titleFontWeight = 'bold',
  descriptionFontWeight = 'bold',
  footerFontWeight = 'normal',
  buttonFontWeight = 'bold',
  videoResizeMode = ResizeMode.CONTAIN,
  imageResizeMode = ResizeMode.CONTAIN,
  titleTextAlign = 'center',
  descriptionTextAlign = 'center',
  footerTextAlign = 'center',
  videoCornerRadius = 10,
  imageCornerRadius = 10,
  videoBackgroundColor = '#000',
  imageBackgroundColor = '#000'
}) => {
  const [ads, setAds] = useState([]);
  const carouselRef = useRef(null);
  const {
    onAdsLayout
  } = UseVisibility();
  const styles = StyleSheet.create({
    container: {
      alignItems: 'center'
    },
    topMessage: {
      fontSize: descriptionTextSize,
      fontWeight: descriptionFontWeight,
      marginBottom: 16,
      textAlign: descriptionTextAlign,
      color: descriptionTextColor
    },
    adContainer: {
      padding: 20,
      margin: 10,
      backgroundColor: adLayoutBackgroundColor,
      borderRadius: 5,
      alignItems: 'center'
    },
    title: {
      color: titleTextColor,
      textAlign: titleTextAlign,
      fontSize: titleTextSize,
      fontWeight: titleFontWeight,
      marginBottom: 16
    },
    video: {
      width: screenWidth - 30,
      height: videoHeight,
      backgroundColor: videoBackgroundColor,
      borderRadius: videoCornerRadius,
      resizeMode: 'center'
    },
    image: {
      width: screenWidth - 30,
      height: imageHeight,
      backgroundColor: imageBackgroundColor,
      borderRadius: imageCornerRadius
    },
    bottomMessage: {
      fontSize: footerTextSize,
      marginTop: 6,
      marginBottom: 20,
      color: footerTextColor,
      textAlign: footerTextAlign,
      fontWeight: footerFontWeight
    },
    button: {
      backgroundColor: buttonBackgroundColor,
      paddingVertical: 12,
      paddingHorizontal: 30,
      borderRadius: buttonBorderRadius,
      marginTop: 10,
      justifyContent: 'center',
      alignItems: 'center'
    },
    buttonText: {
      color: buttonTextColor,
      fontSize: buttonTextSize,
      fontWeight: buttonFontWeight
    }
  });
  useEffect(() => {
    const contentDelivery = async () => {
      try {
        const result = await getContentDelivery();
        if (result.status) {
          setAds(() => result.data.videoAdVerticalVideo);
          const item = result.data.videoAdVerticalVideo[0];
          if (item) {
            await AsyncStorage.setItem(CAMPAIGN_ID, item.campaignId);
            await AsyncStorage.setItem(AD_ID, item.adId);
          }
        }
      } catch (error) {
        console.error('Error fetching content delivery:', error);
      }
    };
    contentDelivery();
  }, []);
  const impressionTrack = async (campaignId, adId) => {
    try {
      const result = await sendImpression('visit', 'action', campaignId, adId);
      if (result.status) {
        // success
      } else {
        // failed
      }
    } catch (error) {
      console.error('Error reach tracking:', error);
    }
  };
  const handleButtonClick = (adUrl, campaignId, adId) => {
    if (adUrl) {
      handleImpressionClick(campaignId, adId);
      Linking.openURL(adUrl).catch(err => console.error('Failed to open URL:', err));
    } else {
      console.log('No URL provided for the ad');
    }
  };
  const handleImpressionClick = async (campaignId, adId) => {
    await AsyncStorage.setItem(CAMPAIGN_ID, campaignId);
    await AsyncStorage.setItem(AD_ID, adId);
    await impressionTrack(campaignId, adId);
  };
  const renderItem = ({
    item
  }) => {
    if (!item) return null;
    return /*#__PURE__*/_jsx(TouchableWithoutFeedback, {
      onPress: () => handleButtonClick(item.linkUrl, item.campaignId, item.adId)
      // handleButtonClick(item.linkUrl)}
      ,
      accessible: false,
      children: /*#__PURE__*/_jsxs(View, {
        style: styles.adContainer,
        children: [item.title && item.title.trim() ? /*#__PURE__*/_jsx(Text, {
          style: styles.title,
          children: item.title
        }) : null, item.topMessage && item.topMessage.trim() ? /*#__PURE__*/_jsx(Text, {
          style: styles.topMessage,
          numberOfLines: 2,
          ellipsizeMode: 'tail',
          children: item.topMessage
        }) : null, item.contentUrl ? isVideo(item.contentUrl) || item.contentType === 'video' ? /*#__PURE__*/_jsx(TouchableWithoutFeedback, {
          onPress: () => {},
          children: /*#__PURE__*/_jsx(Video, {
            source: {
              uri: item.contentUrl
            },
            style: styles.video,
            useNativeControls: true,
            shouldPlay: false,
            resizeMode: videoResizeMode
          })
        }) : /*#__PURE__*/_jsx(Image, {
          source: {
            uri: item.contentUrl
          },
          style: styles.image,
          resizeMode: imageResizeMode
        }) : null, item.bottomMessage && item.bottomMessage.trim() ? /*#__PURE__*/_jsx(Text, {
          style: styles.bottomMessage,
          numberOfLines: 2,
          ellipsizeMode: 'tail',
          children: item.bottomMessage
        }) : null, item.buttonText && item.buttonText.trim() ? /*#__PURE__*/_jsx(TouchableOpacity, {
          style: styles.button,
          onPress: () => handleButtonClick(item.linkUrl, item.campaignId, item.adId)
          // handleButtonClick(item.linkUrl)}
          ,
          children: /*#__PURE__*/_jsx(Text, {
            style: styles.buttonText,
            children: item.buttonText
          })
        }) : null]
      }, 0)
    }, 0);
  };
  return /*#__PURE__*/_jsx(View, {
    style: styles.container,
    onLayout: event => onAdsLayout(event),
    children: ads && ads.length > 0 ? /*#__PURE__*/_jsx(Carousel, {
      ref: carouselRef,
      data: ads,
      renderItem: renderItem,
      sliderWidth: screenWidth,
      itemWidth: screenWidth,
      loop: false,
      autoplay: false,
      vertical: false,
      onSnapToItem: async index => {
        const item = ads[index];
        if (item) {
          const campaignId = item.campaignId;
          const adId = item.adId;
          await handleImpressionClick(campaignId, adId);
        }
      }
    }) : null
  });
};
//# sourceMappingURL=VerticalAd.js.map