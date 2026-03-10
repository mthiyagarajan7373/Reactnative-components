"use strict";

import { useEffect, useRef } from 'react';
import { View, Animated, Easing, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const Loader = ({
  size = 60,
  color = '#180AF2',
  dotSize = 10,
  zIndex = 10000,
  style = 'rotate'
}) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      position: 'absolute',
      flexDirection: style == 'jump' || 'blink' ? 'row' : 'column',
      zIndex: zIndex,
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.3)'
    },
    dotsContainer: {
      position: 'relative',
      width: size,
      height: size,
      justifyContent: 'center',
      alignItems: 'center'
    },
    dot: {
      position: 'absolute',
      width: dotSize,
      height: dotSize,
      borderRadius: 5,
      color: color
    },
    dots: {
      width: dotSize,
      height: dotSize,
      borderRadius: 6,
      backgroundColor: color,
      marginHorizontal: 8
    },
    blinkDot: {
      width: dotSize,
      height: dotSize,
      borderRadius: 10,
      marginHorizontal: 6
    }
  });
  const RotatingDots = () => {
    const rotateAnim = useRef(new Animated.Value(0)).current;
    useEffect(() => {
      Animated.loop(Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true
      })).start();
    }, []);
    const spin = rotateAnim.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    });
    const dotCount = 6;
    const radius = size / 2 - dotSize;
    return /*#__PURE__*/_jsx(Animated.View, {
      style: [styles.dotsContainer, {
        transform: [{
          rotate: spin
        }]
      }],
      children: [...Array(dotCount)].map((_, index) => {
        const angle = index * 2 * Math.PI / dotCount;
        const x = radius * Math.cos(angle);
        const y = radius * Math.sin(angle);
        return /*#__PURE__*/_jsx(View, {
          style: [styles.dot, {
            left: size / 2 + x - dotSize / 2,
            top: size / 2 + y - dotSize / 2,
            backgroundColor: color
          }]
        }, index);
      })
    });
  };
  const JumpingDot = ({
    delay
  }) => {
    const translateY = useRef(new Animated.Value(0)).current;
    useEffect(() => {
      const animation = Animated.loop(Animated.sequence([Animated.delay(delay), Animated.timing(translateY, {
        toValue: 10,
        duration: 300,
        useNativeDriver: true
      }), Animated.timing(translateY, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true
      }), Animated.delay(10)]));
      animation.start();
      return () => animation.stop();
    }, [translateY, delay]);
    return /*#__PURE__*/_jsx(Animated.View, {
      style: [styles.dots, {
        transform: [{
          translateY
        }]
      }]
    });
  };
  const ColorChangingDot = ({
    delay
  }) => {
    const animation = useRef(new Animated.Value(0)).current;
    useEffect(() => {
      const loopAnimation = Animated.loop(Animated.sequence([Animated.delay(delay), Animated.timing(animation, {
        toValue: 1,
        duration: 500,
        useNativeDriver: false
      }), Animated.timing(animation, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false
      })]));
      loopAnimation.start();
      return () => loopAnimation.stop();
    }, [animation, delay]);
    const backgroundColor = animation.interpolate({
      inputRange: [0, 1],
      outputRange: ['#ccc', color]
    });
    return /*#__PURE__*/_jsx(Animated.View, {
      style: [styles.blinkDot, {
        backgroundColor
      }]
    });
  };
  const VerticalColorWaveLoader = () => {
    return /*#__PURE__*/_jsxs(View, {
      style: styles.container,
      children: [/*#__PURE__*/_jsx(ColorChangingDot, {
        delay: 0
      }), /*#__PURE__*/_jsx(ColorChangingDot, {
        delay: 150
      }), /*#__PURE__*/_jsx(ColorChangingDot, {
        delay: 300
      }), /*#__PURE__*/_jsx(ColorChangingDot, {
        delay: 450
      }), /*#__PURE__*/_jsx(ColorChangingDot, {
        delay: 600
      })]
    });
  };
  const ArcLoader = () => {
    const AnimatedSvg = Animated.createAnimatedComponent(Svg);
    const rotateAnim = useRef(new Animated.Value(0)).current;
    useEffect(() => {
      Animated.loop(Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true
      })).start();
    }, []);
    const spin = rotateAnim.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    });
    return /*#__PURE__*/_jsx(View, {
      style: styles.container,
      children: /*#__PURE__*/_jsx(AnimatedSvg, {
        width: size,
        height: size,
        style: {
          transform: [{
            rotate: spin
          }]
        },
        viewBox: "0 0 100 100",
        children: /*#__PURE__*/_jsx(Path, {
          d: "M50,10 A40,40 0 0,1 90,50",
          stroke: color,
          strokeWidth: dotSize,
          fill: "none",
          strokeLinecap: "round"
        })
      })
    });
  };
  const WaveDotsLoader = () => {
    return /*#__PURE__*/_jsxs(View, {
      style: styles.container,
      children: [/*#__PURE__*/_jsx(JumpingDot, {
        delay: 0
      }), /*#__PURE__*/_jsx(JumpingDot, {
        delay: 10
      }), /*#__PURE__*/_jsx(JumpingDot, {
        delay: 20
      }), /*#__PURE__*/_jsx(JumpingDot, {
        delay: 30
      })]
    });
  };
  return /*#__PURE__*/_jsxs(View, {
    style: styles.container,
    children: [style === 'jump' && /*#__PURE__*/_jsx(WaveDotsLoader, {}), style === 'circle' && /*#__PURE__*/_jsx(ArcLoader, {}), style === 'rotate' && /*#__PURE__*/_jsx(RotatingDots, {}), style === 'blink' && /*#__PURE__*/_jsx(VerticalColorWaveLoader, {})]
  });
};
//# sourceMappingURL=Loader.js.map