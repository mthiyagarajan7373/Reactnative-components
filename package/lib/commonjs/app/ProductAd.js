"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductAd = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _reactNativeReanimatedCarousel = _interopRequireDefault(require("react-native-reanimated-carousel"));
var _SvgRight = _interopRequireDefault(require("../icons/SvgRight.js"));
var _SvgLeft = _interopRequireDefault(require("../icons/SvgLeft.js"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const {
  width: screenWidth
} = _reactNative.Dimensions.get('window');
const data = [{
  price: '$ 699.99',
  imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0pyrmegq-5rPAjJJN_tUDPtN-LGGBiLedAg&s',
  content: 'SAMSUNG Galaxy note 8 pro 8GB RAM, 128GB Storage Dual sim Black'
}, {
  price: '$ 277.99',
  imageUrl: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MQTR3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1687660671097',
  content: 'JBL Live 770NC True Adaptive Noise Cancellation Headphones Wireless Over Ear, Spatial Sound, 65Hrs Playtime, Speed Charge, Multipoint Connect and Personi-Fi 2.0, BT 5.3, Google Fast Pair, Alexa, Black'
}, {
  price: '$ 509.90',
  imageUrl: 'https://www.jiomart.com/images/product/original/rvlmxurlrv/wearfit-next-gen-champ-4g-kids-smartwatch-with-4g-video-call-gps-tracking-games-anti-theft-and-parental-control-age-3-12-years-pink-product-images-orvlmxurlrv-p592817586-0-202309201853.png?im=Resize=(1000,1000)',
  content: 'FITTR HART X2 Smart Ring | Size First w/Sizing Kit | Sleep, Recovery, Activity & Fitness Tracker | 8-Day Battery, 50m Water Resistance | (Frost Silver, 7)'
}, {
  price: '$ 10.99',
  imageUrl: 'https://images.samsung.com/is/image/samsung/assets/in/tablets/galaxy-tab-s10/buy/S10-Ultra_Color-Selection_Moonstone-Gray_PC_1600x864.png',
  content: 'Xiaomi Pad 7 Nano Texture Display Edition|Anti-Reflective|Anti-Glare|Snapdragon 7+ Gen 3|3.2K Display (28.35 cm /11.16") Tablet|12GB, 256GB|HyperOS 2|68 Bn+ Colours|Dolby Vision Atmos|Sage Green'
}, {
  price: '$ 699.99',
  imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0pyrmegq-5rPAjJJN_tUDPtN-LGGBiLedAg&s',
  content: 'SAMSUNG Galaxy note 8 pro 8GB RAM, 128GB Storage Dual sim Black'
}, {
  price: '$ 277.99',
  imageUrl: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MQTR3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1687660671097',
  content: 'JBL Live 770NC True Adaptive Noise Cancellation Headphones Wireless Over Ear, Spatial Sound, 65Hrs Playtime, Speed Charge, Multipoint Connect and Personi-Fi 2.0, BT 5.3, Google Fast Pair, Alexa, Black'
}, {
  price: '$ 509.90',
  imageUrl: 'https://www.jiomart.com/images/product/original/rvlmxurlrv/wearfit-next-gen-champ-4g-kids-smartwatch-with-4g-video-call-gps-tracking-games-anti-theft-and-parental-control-age-3-12-years-pink-product-images-orvlmxurlrv-p592817586-0-202309201853.png?im=Resize=(1000,1000)',
  content: 'FITTR HART X2 Smart Ring | Size First w/Sizing Kit | Sleep, Recovery, Activity & Fitness Tracker | 8-Day Battery, 50m Water Resistance | (Frost Silver, 7)'
}, {
  price: '$ 10.99',
  imageUrl: 'https://images.samsung.com/is/image/samsung/assets/in/tablets/galaxy-tab-s10/buy/S10-Ultra_Color-Selection_Moonstone-Gray_PC_1600x864.png',
  content: 'Xiaomi Pad 7 Nano Texture Display Edition|Anti-Reflective|Anti-Glare|Snapdragon 7+ Gen 3|3.2K Display (28.35 cm /11.16") Tablet|12GB, 256GB|HyperOS 2|68 Bn+ Colours|Dolby Vision Atmos|Sage Green'
}, {
  price: '$ 509.90',
  imageUrl: 'https://www.jiomart.com/images/product/original/rvlmxurlrv/wearfit-next-gen-champ-4g-kids-smartwatch-with-4g-video-call-gps-tracking-games-anti-theft-and-parental-control-age-3-12-years-pink-product-images-orvlmxurlrv-p592817586-0-202309201853.png?im=Resize=(1000,1000)',
  content: 'FITTR HART X2 Smart Ring | Size First w/Sizing Kit | Sleep, Recovery, Activity & Fitness Tracker | 8-Day Battery, 50m Water Resistance | (Frost Silver, 7)'
}, {
  price: '$ 10.99',
  imageUrl: 'https://images.samsung.com/is/image/samsung/assets/in/tablets/galaxy-tab-s10/buy/S10-Ultra_Color-Selection_Moonstone-Gray_PC_1600x864.png',
  content: 'Xiaomi Pad 7 Nano Texture Display Edition|Anti-Reflective|Anti-Glare|Snapdragon 7+ Gen 3|3.2K Display (28.35 cm /11.16") Tablet|12GB, 256GB|HyperOS 2|68 Bn+ Colours|Dolby Vision Atmos|Sage Green'
}, {
  price: '$ 509.90',
  imageUrl: 'https://www.jiomart.com/images/product/original/rvlmxurlrv/wearfit-next-gen-champ-4g-kids-smartwatch-with-4g-video-call-gps-tracking-games-anti-theft-and-parental-control-age-3-12-years-pink-product-images-orvlmxurlrv-p592817586-0-202309201853.png?im=Resize=(1000,1000)',
  content: 'FITTR HART X2 Smart Ring | Size First w/Sizing Kit | Sleep, Recovery, Activity & Fitness Tracker | 8-Day Battery, 50m Water Resistance | (Frost Silver, 7)'
}, {
  price: '$ 509.90',
  imageUrl: 'https://www.jiomart.com/images/product/original/rvlmxurlrv/wearfit-next-gen-champ-4g-kids-smartwatch-with-4g-video-call-gps-tracking-games-anti-theft-and-parental-control-age-3-12-years-pink-product-images-orvlmxurlrv-p592817586-0-202309201853.png?im=Resize=(1000,1000)',
  content: 'FITTR HART X2 Smart Ring | Size First w/Sizing Kit | Sleep, Recovery, Activity & Fitness Tracker | 8-Day Battery, 50m Water Resistance | (Frost Silver, 7)'
}, {
  price: '$ 10.99',
  imageUrl: 'https://images.samsung.com/is/image/samsung/assets/in/tablets/galaxy-tab-s10/buy/S10-Ultra_Color-Selection_Moonstone-Gray_PC_1600x864.png',
  content: 'Xiaomi Pad 7 Nano Texture Display Edition|Anti-Reflective|Anti-Glare|Snapdragon 7+ Gen 3|3.2K Display (28.35 cm /11.16") Tablet|12GB, 256GB|HyperOS 2|68 Bn+ Colours|Dolby Vision Atmos|Sage Green'
}, {
  price: '$ 509.90',
  imageUrl: 'https://www.jiomart.com/images/product/original/rvlmxurlrv/wearfit-next-gen-champ-4g-kids-smartwatch-with-4g-video-call-gps-tracking-games-anti-theft-and-parental-control-age-3-12-years-pink-product-images-orvlmxurlrv-p592817586-0-202309201853.png?im=Resize=(1000,1000)',
  content: 'FITTR HART X2 Smart Ring | Size First w/Sizing Kit | Sleep, Recovery, Activity & Fitness Tracker | 8-Day Battery, 50m Water Resistance | (Frost Silver, 7)'
}];
const ProductAd = ({
  imageHeight = '40%',
  imageWidth = '80%',
  buttonHeight = '10%',
  buttonWidth = '80%',
  contentTextSize = 14,
  priceTextSize = 16,
  buttonTextSize = 18,
  pageIndicatorSize = 12,
  adBackgroundColour = '#ccc',
  contentTextColour = '#000',
  priceTextColour = '#ff0000',
  buttonColour = '#ff0000',
  buttonTextColour = '#fff',
  inactiveDotColour = '#ccc',
  activeDotColour = '#1d8ad6',
  buttonRadius = 6,
  adContainerRadus = 4,
  numberOFAds = 2,
  showPageIndicator = true,
  showPageChanger = true,
  pageChangerSize = 'medium',
  pageChangerColour = '#000',
  contentTextWeight = 'bold',
  priceTextWeight = 'bold',
  buttonTextWeight = 'bold',
  alignImage = 'center',
  alignContent = 'left',
  alignPrice = 'left',
  alignButton = 'center'
}) => {
  const carouselRef = (0, _react.useRef)(null);
  const [activeIndex, setActiveIndex] = (0, _react.useState)(0);
  const [previousIndex, setPreviousIndex] = (0, _react.useState)(0);
  const pairedData = [];
  if (numberOFAds === 1) {
    for (let i = 0; i < data.length; i += 1) {
      pairedData.push([data[i]]);
    }
  } else if (numberOFAds === 2) {
    for (let i = 0; i < data.length; i += 2) {
      pairedData.push([data[i], data[i + 1]]);
    }
  } else if (numberOFAds === 3) {
    for (let i = 0; i < data.length; i += 3) {
      pairedData.push([data[i], data[i + 1], data[i + 2]]);
    }
  } else if (numberOFAds === 4) {
    for (let i = 0; i < data.length; i += 4) {
      pairedData.push([data[i], data[i + 1], data[i + 2], data[i + 3]]);
    }
  }
  const totalPages = pairedData.length;
  const cleanedData = pairedData.map(pair => pair.filter(item => item !== undefined));
  const styles = _reactNative.StyleSheet.create({
    overAll: {
      alignItems: 'center',
      backgroundColor: '#fff',
      width: screenWidth,
      height: '100%',
      padding: 16
    },
    scrollContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      height: '54%'
    },
    container: {
      flex: 1,
      width: screenWidth / numberOFAds,
      flexDirection: 'row',
      paddingHorizontal: 10
    },
    subContainer: {
      backgroundColor: adBackgroundColour,
      borderRadius: adContainerRadus,
      width: '100%',
      height: '100%',
      marginRight: 20,
      padding: 10
    },
    images: {
      marginTop: 10,
      width: imageWidth,
      height: imageHeight,
      resizeMode: 'cover',
      alignSelf: alignImage
    },
    content: {
      flex: 1,
      marginVertical: 4,
      marginHorizontal: 6,
      textAlign: alignContent,
      fontSize: contentTextSize,
      color: contentTextColour,
      fontWeight: contentTextWeight
    },
    price: {
      color: priceTextColour,
      marginBottom: 10,
      textAlign: alignPrice,
      fontSize: priceTextSize,
      fontWeight: priceTextWeight
    },
    button: {
      backgroundColor: buttonColour,
      borderRadius: buttonRadius,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: alignButton === 'left' ? 'flex-start' : alignButton === 'right' ? 'flex-end' : 'center',
      marginBottom: 10
    },
    buttonText: {
      color: buttonTextColour,
      fontSize: buttonTextSize,
      fontWeight: buttonTextWeight
    },
    dotsContainer: {
      alignSelf: 'center',
      flexDirection: 'row'
    },
    dot: {
      width: pageIndicatorSize,
      height: pageIndicatorSize,
      borderRadius: 90,
      margin: 5,
      backgroundColor: inactiveDotColour
    },
    arrowText: {
      position: 'absolute',
      padding: 2
    },
    activeDot: {
      backgroundColor: activeDotColour
    },
    ellipsisText: {
      color: activeDotColour,
      fontSize: 16
    }
  });
  const goToNextPage = action => {
    setActiveIndex(prevIndex => {
      const nextIndex = (prevIndex + 1) % pairedData.length;
      console.log(prevIndex, numberOFAds, nextIndex);
      {
        action === 'click' && carouselRef.current?.scrollTo({
          index: nextIndex,
          animated: true
        });
      }
      return nextIndex;
    });
  };
  const goToPrevPage = action => {
    setActiveIndex(prevIndex => {
      const prevIndexCalc = (prevIndex - 1 + pairedData.length) % pairedData.length;
      {
        action === 'click' && carouselRef?.current?.scrollTo({
          index: prevIndexCalc,
          animated: true
        });
      }
      return prevIndexCalc;
    });
  };
  const handleSnap = index => {
    if (index > previousIndex) {
      console.log('Swiped Right');
      goToNextPage('swipe');
    } else if (index < previousIndex) {
      console.log('Swiped Left');
      goToPrevPage('swipe');
    }
    setPreviousIndex(activeIndex);
    setActiveIndex(index);
  };
  const renderItem = ({
    item
  }) => {
    const [pair1, pair2, pair3, pair4] = item;
    const maxLength1 = pair1 && pair1.content?.length > 100 ? pair1.content.slice(0, 100) + '...' : pair1?.content;
    const maxLength2 = pair2 && pair2.content.length > 100 ? pair2.content.slice(0, 100) + '...' : pair2?.content;
    const maxLength3 = pair3 && pair3.content.length > 100 ? pair3.content.slice(0, 100) + '...' : pair3?.content;
    const maxLength4 = pair4 && pair4.content.length > 100 ? pair4.content.slice(0, 100) + '...' : pair4?.content;
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
      style: styles.container,
      children: [pair1 && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
        style: styles.subContainer,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Image, {
          style: styles.images,
          source: {
            uri: pair1.imageUrl
          }
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Text, {
          style: styles.content,
          children: maxLength1
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.Text, {
          style: styles.price,
          children: ["Price:", pair1.price]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.TouchableOpacity, {
          style: [styles.button, {
            width: buttonWidth,
            height: buttonHeight
          }],
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Text, {
            style: styles.buttonText,
            children: "Add to cart"
          })
        })]
      }), pair2 && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
        style: styles.subContainer,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Image, {
          style: styles.images,
          source: {
            uri: pair2.imageUrl
          }
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Text, {
          style: styles.content,
          children: maxLength2
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.Text, {
          style: styles.price,
          children: ["Price:", pair2.price]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.TouchableOpacity, {
          style: [styles.button, {
            width: buttonWidth,
            height: buttonHeight
          }],
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Text, {
            style: styles.buttonText,
            children: "Add to cart"
          })
        })]
      }), pair3 && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
        style: styles.subContainer,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Image, {
          style: styles.images,
          source: {
            uri: pair3.imageUrl
          }
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Text, {
          style: styles.content,
          children: maxLength3
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.Text, {
          style: styles.price,
          children: ["Price:", pair3.price]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.TouchableOpacity, {
          style: [styles.button, {
            width: buttonWidth,
            height: buttonHeight
          }],
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Text, {
            style: styles.buttonText,
            children: "Add to cart"
          })
        })]
      }), pair4 && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
        style: styles.subContainer,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Image, {
          style: styles.images,
          source: {
            uri: pair4.imageUrl
          }
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Text, {
          style: styles.content,
          children: maxLength4
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.Text, {
          style: styles.price,
          children: ["Price:", pair4.price]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.TouchableOpacity, {
          style: [styles.button, {
            width: buttonWidth,
            height: buttonHeight
          }],
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Text, {
            style: styles.buttonText,
            children: "Add to cart"
          })
        })]
      })]
    });
  };
  const renderDots = () => {
    const dots = [];
    const maxDots = 5;
    const totalDots = totalPages > 5 ? 5 : totalPages;
    const startDot = Math.floor(activeIndex / maxDots) * maxDots;
    for (let i = startDot; i < Math.min(startDot + totalDots, totalPages); i++) {
      dots.push(/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.TouchableOpacity, {
        style: [styles.dot, i === activeIndex && styles.activeDot],
        onPress: () => {
          setActiveIndex(i);
          carouselRef.current?.scrollTo({
            index: i,
            animated: true
          });
        }
      }, i));
    }
    return dots;
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
    style: styles.overAll,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
      style: styles.scrollContainer,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeReanimatedCarousel.default, {
        ref: carouselRef,
        style: {
          marginLeft: 140
        },
        loop: false,
        width: screenWidth + 40,
        data: cleanedData,
        scrollAnimationDuration: 500,
        renderItem: renderItem,
        enableSnap: true,
        mode: "parallax",
        snapEnabled: true,
        onSnapToItem: handleSnap
      }), showPageChanger === true && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
        children: [activeIndex !== 0 && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.TouchableOpacity, {
          onPress: () => goToPrevPage('click'),
          style: [styles.arrowText, {
            left: 46
          }],
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_SvgLeft.default, {
            colour: pageChangerColour,
            size: pageChangerSize === 'small' ? 18 : pageChangerSize === 'big' ? 30 : 24
          })
        }), activeIndex + 1 !== totalPages && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.TouchableOpacity, {
          onPress: () => goToNextPage('click'),
          style: [styles.arrowText, {
            right: 46
          }],
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_SvgRight.default, {
            colour: pageChangerColour,
            size: pageChangerSize === 'small' ? 18 : pageChangerSize === 'big' ? 30 : 24
          })
        })]
      })]
    }), showPageIndicator && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
      style: styles.dotsContainer,
      children: renderDots()
    })]
  });
};
exports.ProductAd = ProductAd;
//# sourceMappingURL=ProductAd.js.map