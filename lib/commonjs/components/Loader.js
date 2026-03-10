"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Loader = void 0;
var _react = require("react");
var _reactNative = require("react-native");
var _reactNativeSvg = _interopRequireWildcard(require("react-native-svg"));
var _jsxRuntime = require("react/jsx-runtime");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const Loader = ({
  size = 60,
  color = '#180AF2',
  dotSize = 10,
  zIndex = 10000,
  style = 'rotate'
}) => {
  const styles = _reactNative.StyleSheet.create({
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
    const rotateAnim = (0, _react.useRef)(new _reactNative.Animated.Value(0)).current;
    (0, _react.useEffect)(() => {
      _reactNative.Animated.loop(_reactNative.Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 1000,
        easing: _reactNative.Easing.linear,
        useNativeDriver: true
      })).start();
    }, []);
    const spin = rotateAnim.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    });
    const dotCount = 6;
    const radius = size / 2 - dotSize;
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Animated.View, {
      style: [styles.dotsContainer, {
        transform: [{
          rotate: spin
        }]
      }],
      children: [...Array(dotCount)].map((_, index) => {
        const angle = index * 2 * Math.PI / dotCount;
        const x = radius * Math.cos(angle);
        const y = radius * Math.sin(angle);
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
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
    const translateY = (0, _react.useRef)(new _reactNative.Animated.Value(0)).current;
    (0, _react.useEffect)(() => {
      const animation = _reactNative.Animated.loop(_reactNative.Animated.sequence([_reactNative.Animated.delay(delay), _reactNative.Animated.timing(translateY, {
        toValue: 10,
        duration: 300,
        useNativeDriver: true
      }), _reactNative.Animated.timing(translateY, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true
      }), _reactNative.Animated.delay(10)]));
      animation.start();
      return () => animation.stop();
    }, [translateY, delay]);
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Animated.View, {
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
    const animation = (0, _react.useRef)(new _reactNative.Animated.Value(0)).current;
    (0, _react.useEffect)(() => {
      const loopAnimation = _reactNative.Animated.loop(_reactNative.Animated.sequence([_reactNative.Animated.delay(delay), _reactNative.Animated.timing(animation, {
        toValue: 1,
        duration: 500,
        useNativeDriver: false
      }), _reactNative.Animated.timing(animation, {
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
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Animated.View, {
      style: [styles.blinkDot, {
        backgroundColor
      }]
    });
  };
  const VerticalColorWaveLoader = () => {
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
      style: styles.container,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(ColorChangingDot, {
        delay: 0
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(ColorChangingDot, {
        delay: 150
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(ColorChangingDot, {
        delay: 300
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(ColorChangingDot, {
        delay: 450
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(ColorChangingDot, {
        delay: 600
      })]
    });
  };
  const ArcLoader = () => {
    const AnimatedSvg = _reactNative.Animated.createAnimatedComponent(_reactNativeSvg.default);
    const rotateAnim = (0, _react.useRef)(new _reactNative.Animated.Value(0)).current;
    (0, _react.useEffect)(() => {
      _reactNative.Animated.loop(_reactNative.Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 1000,
        easing: _reactNative.Easing.linear,
        useNativeDriver: true
      })).start();
    }, []);
    const spin = rotateAnim.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    });
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
      style: styles.container,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(AnimatedSvg, {
        width: size,
        height: size,
        style: {
          transform: [{
            rotate: spin
          }]
        },
        viewBox: "0 0 100 100",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeSvg.Path, {
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
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
      style: styles.container,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(JumpingDot, {
        delay: 0
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(JumpingDot, {
        delay: 10
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(JumpingDot, {
        delay: 20
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(JumpingDot, {
        delay: 30
      })]
    });
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
    style: styles.container,
    children: [style === 'jump' && /*#__PURE__*/(0, _jsxRuntime.jsx)(WaveDotsLoader, {}), style === 'circle' && /*#__PURE__*/(0, _jsxRuntime.jsx)(ArcLoader, {}), style === 'rotate' && /*#__PURE__*/(0, _jsxRuntime.jsx)(RotatingDots, {}), style === 'blink' && /*#__PURE__*/(0, _jsxRuntime.jsx)(VerticalColorWaveLoader, {})]
  });
};
exports.Loader = Loader;
//# sourceMappingURL=Loader.js.map