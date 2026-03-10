"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LeadAd = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _reactNativeSnapCarouselV = require("react-native-snap-carousel-v4");
var _Utils = require("../utils/Utils.js");
var _expoAv = require("expo-av");
var _rnFootPrintsTracking = require("rn-foot-prints-tracking");
var _asyncStorage = _interopRequireDefault(require("@react-native-async-storage/async-storage"));
var _Constants = require("../constants/Constants.js");
var _reactNativeWebview = _interopRequireDefault(require("react-native-webview"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const {
  width: screenWidth
} = _reactNative.Dimensions.get('window');
const LeadAd = ({
  videoHeight = 200,
  imageHeight = 200,
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
  videoResizeMode = _expoAv.ResizeMode.CONTAIN,
  imageResizeMode = _expoAv.ResizeMode.CONTAIN,
  titleTextAlign = 'center',
  descriptionTextAlign = 'center',
  footerTextAlign = 'center',
  videoCornerRadius = 10,
  imageCornerRadius = 10,
  videoBackgroundColor = '#000',
  imageBackgroundColor = '#000'
}) => {
  const [ads, setAds] = (0, _react.useState)([]);
  const carouselRef = (0, _react.useRef)(null);
  const {
    onAdsLayout
  } = (0, _Utils.UseVisibility)();
  const [formVisible, setFormVisible] = (0, _react.useState)(false);
  const [formUri, setFormUri] = (0, _react.useState)('');
  const [isCampaignId, setCampaignId] = (0, _react.useState)('');
  const [isadId, setAdId] = (0, _react.useState)('');
  const styles = _reactNative.StyleSheet.create({
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
    },
    formSafeAreaContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0,0,0,0.5)'
    },
    formContainer: {
      height: '100%',
      width: '100%',
      marginTop: 27,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10
    },
    cancelIconContainer: {
      alignSelf: 'flex-end',
      paddingHorizontal: 12,
      paddingVertical: 12
    },
    webViewWrapper: {
      flex: 1,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      overflow: 'hidden'
    },
    webViewContainer: {
      flex: 1
    }
  });
  (0, _react.useEffect)(() => {
    const contentDelivery = async () => {
      try {
        const result = await (0, _rnFootPrintsTracking.getContentDelivery)();
        if (result.status) {
          setAds(() => result.data.leadAd);
          const item = result.data.leadAd[0];
          if (item) {
            await _asyncStorage.default.setItem(_Constants.CAMPAIGN_ID, item.campaignId);
            await _asyncStorage.default.setItem(_Constants.AD_ID, item.adId);
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
      const result = await (0, _rnFootPrintsTracking.sendImpression)('visit', 'action', campaignId, adId);
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
      _reactNative.Linking.openURL(adUrl).catch(err => console.error('Failed to open URL:', err));
    } else {
      console.log('No URL provided for the ad');
    }
  };
  const handleImpressionClick = async (campaignId, adId) => {
    await _asyncStorage.default.setItem(_Constants.CAMPAIGN_ID, campaignId);
    await _asyncStorage.default.setItem(_Constants.AD_ID, adId);
    await impressionTrack(campaignId, adId);
  };
  const renderItem = ({
    item
  }) => {
    if (!item) return null;
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.TouchableWithoutFeedback, {
      onPress: () => {
        setFormUri(item.linkUrl);
        setCampaignId(item.campaignId);
        setAdId(item.adId);
        setFormVisible(true);
      },
      accessible: false,
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
        style: styles.adContainer,
        children: [item.title && item.title.trim() ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Text, {
          style: styles.title,
          children: item.title
        }) : null, item.topMessage && item.topMessage.trim() ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Text, {
          style: styles.topMessage,
          numberOfLines: 2,
          ellipsizeMode: 'tail',
          children: item.topMessage
        }) : null, item.contentUrl ? (0, _Utils.isVideo)(item.contentUrl) || item.contentType === 'video' ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_expoAv.Video, {
          source: {
            uri: item.contentUrl
          },
          style: styles.video,
          useNativeControls: true,
          shouldPlay: false,
          resizeMode: videoResizeMode
        }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Image, {
          source: {
            uri: item.contentUrl
          },
          style: styles.image,
          resizeMode: imageResizeMode
        }) : null, item.bottomMessage && item.bottomMessage.trim() ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Text, {
          style: styles.bottomMessage,
          numberOfLines: 2,
          ellipsizeMode: 'tail',
          children: item.bottomMessage
        }) : null, item.buttonText && item.buttonText.trim() ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.TouchableOpacity, {
          style: styles.button,
          onPress: () => handleButtonClick(item.linkUrl, item.campaignId, item.adId)
          // handleButtonClick(item.linkUrl)}
          ,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Text, {
            style: styles.buttonText,
            children: item.buttonText
          })
        }) : null]
      }, 0)
    }, 0);
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
    style: styles.container,
    onLayout: event => onAdsLayout(event),
    children: [ads && ads.length > 0 ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeSnapCarouselV.Carousel, {
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
    }) : null, formVisible && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Modal, {
      visible: formVisible,
      transparent: true,
      animationType: "slide",
      onRequestClose: () => setFormVisible(false),
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.SafeAreaView, {
        style: styles.formSafeAreaContainer,
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
          style: styles.formContainer,
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.TouchableOpacity, {
            onPress: () => setFormVisible(false),
            style: styles.cancelIconContainer,
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Image, {
              source: require('../assets/close.png'),
              style: {
                width: 23,
                height: 23
              }
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
            style: styles.webViewWrapper,
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeWebview.default, {
              source: {
                uri: formUri ? 'https://staging.footprints-ai.com/form/679e30fdbc7b709e690166dd?mediumType=websiteLeadConversationBanner' : ''
              },
              style: styles.webViewContainer,
              onNavigationStateChange: navState => {
                if (navState.url.startsWith('https://api.whatsapp.com/send') || navState.url.startsWith('whatsapp://')) {
                  setTimeout(() => setFormVisible(false), 2000);
                  handleImpressionClick(isCampaignId, isadId);
                }
              }
            })
          })]
        })
      })
    })]
  });
};
exports.LeadAd = LeadAd;
//# sourceMappingURL=LeadAd.js.map