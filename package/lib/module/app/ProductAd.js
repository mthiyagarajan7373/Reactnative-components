"use strict";

import React, { useRef, useState } from 'react';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import SvgRight from "../icons/SvgRight.js";
import SvgLeft from "../icons/SvgLeft.js";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
const {
  width: screenWidth
} = Dimensions.get('window');
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
export const ProductAd = ({
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
  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState(0);
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
  const styles = StyleSheet.create({
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
    return /*#__PURE__*/_jsxs(View, {
      style: styles.container,
      children: [pair1 && /*#__PURE__*/_jsxs(View, {
        style: styles.subContainer,
        children: [/*#__PURE__*/_jsx(Image, {
          style: styles.images,
          source: {
            uri: pair1.imageUrl
          }
        }), /*#__PURE__*/_jsx(Text, {
          style: styles.content,
          children: maxLength1
        }), /*#__PURE__*/_jsxs(Text, {
          style: styles.price,
          children: ["Price:", pair1.price]
        }), /*#__PURE__*/_jsx(TouchableOpacity, {
          style: [styles.button, {
            width: buttonWidth,
            height: buttonHeight
          }],
          children: /*#__PURE__*/_jsx(Text, {
            style: styles.buttonText,
            children: "Add to cart"
          })
        })]
      }), pair2 && /*#__PURE__*/_jsxs(View, {
        style: styles.subContainer,
        children: [/*#__PURE__*/_jsx(Image, {
          style: styles.images,
          source: {
            uri: pair2.imageUrl
          }
        }), /*#__PURE__*/_jsx(Text, {
          style: styles.content,
          children: maxLength2
        }), /*#__PURE__*/_jsxs(Text, {
          style: styles.price,
          children: ["Price:", pair2.price]
        }), /*#__PURE__*/_jsx(TouchableOpacity, {
          style: [styles.button, {
            width: buttonWidth,
            height: buttonHeight
          }],
          children: /*#__PURE__*/_jsx(Text, {
            style: styles.buttonText,
            children: "Add to cart"
          })
        })]
      }), pair3 && /*#__PURE__*/_jsxs(View, {
        style: styles.subContainer,
        children: [/*#__PURE__*/_jsx(Image, {
          style: styles.images,
          source: {
            uri: pair3.imageUrl
          }
        }), /*#__PURE__*/_jsx(Text, {
          style: styles.content,
          children: maxLength3
        }), /*#__PURE__*/_jsxs(Text, {
          style: styles.price,
          children: ["Price:", pair3.price]
        }), /*#__PURE__*/_jsx(TouchableOpacity, {
          style: [styles.button, {
            width: buttonWidth,
            height: buttonHeight
          }],
          children: /*#__PURE__*/_jsx(Text, {
            style: styles.buttonText,
            children: "Add to cart"
          })
        })]
      }), pair4 && /*#__PURE__*/_jsxs(View, {
        style: styles.subContainer,
        children: [/*#__PURE__*/_jsx(Image, {
          style: styles.images,
          source: {
            uri: pair4.imageUrl
          }
        }), /*#__PURE__*/_jsx(Text, {
          style: styles.content,
          children: maxLength4
        }), /*#__PURE__*/_jsxs(Text, {
          style: styles.price,
          children: ["Price:", pair4.price]
        }), /*#__PURE__*/_jsx(TouchableOpacity, {
          style: [styles.button, {
            width: buttonWidth,
            height: buttonHeight
          }],
          children: /*#__PURE__*/_jsx(Text, {
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
      dots.push(/*#__PURE__*/_jsx(TouchableOpacity, {
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
  return /*#__PURE__*/_jsxs(View, {
    style: styles.overAll,
    children: [/*#__PURE__*/_jsxs(View, {
      style: styles.scrollContainer,
      children: [/*#__PURE__*/_jsx(Carousel, {
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
      }), showPageChanger === true && /*#__PURE__*/_jsxs(_Fragment, {
        children: [activeIndex !== 0 && /*#__PURE__*/_jsx(TouchableOpacity, {
          onPress: () => goToPrevPage('click'),
          style: [styles.arrowText, {
            left: 46
          }],
          children: /*#__PURE__*/_jsx(SvgLeft, {
            colour: pageChangerColour,
            size: pageChangerSize === 'small' ? 18 : pageChangerSize === 'big' ? 30 : 24
          })
        }), activeIndex + 1 !== totalPages && /*#__PURE__*/_jsx(TouchableOpacity, {
          onPress: () => goToNextPage('click'),
          style: [styles.arrowText, {
            right: 46
          }],
          children: /*#__PURE__*/_jsx(SvgRight, {
            colour: pageChangerColour,
            size: pageChangerSize === 'small' ? 18 : pageChangerSize === 'big' ? 30 : 24
          })
        })]
      })]
    }), showPageIndicator && /*#__PURE__*/_jsx(View, {
      style: styles.dotsContainer,
      children: renderDots()
    })]
  });
};
//# sourceMappingURL=ProductAd.js.map