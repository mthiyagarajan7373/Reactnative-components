"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shake = void 0;
var _reactNative = require("react-native");
const shake = shakeAnim => {
  if (_reactNative.Platform.OS === 'android') {
    _reactNative.Vibration.vibrate(100);
  } else {
    _reactNative.Vibration.vibrate([0, 100, 50, 100]);
  }
  _reactNative.Animated.sequence([_reactNative.Animated.timing(shakeAnim, {
    toValue: -10,
    duration: 50,
    useNativeDriver: true
  }), _reactNative.Animated.timing(shakeAnim, {
    toValue: 10,
    duration: 50,
    useNativeDriver: true
  }), _reactNative.Animated.timing(shakeAnim, {
    toValue: -10,
    duration: 50,
    useNativeDriver: true
  }), _reactNative.Animated.timing(shakeAnim, {
    toValue: 10,
    duration: 50,
    useNativeDriver: true
  }), _reactNative.Animated.timing(shakeAnim, {
    toValue: 0,
    duration: 50,
    useNativeDriver: true
  })]).start();
};
exports.shake = shake;
//# sourceMappingURL=Shake.js.map