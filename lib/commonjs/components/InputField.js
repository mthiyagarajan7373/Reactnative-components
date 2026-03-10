"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InputField = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _Shake = require("../animation/Shake.js");
var _jsxRuntime = require("react/jsx-runtime");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const InputField = exports.InputField = /*#__PURE__*/(0, _react.forwardRef)(function InputField({
  icon,
  iconStyle,
  imageStyle,
  style,
  containerStyle,
  rightIcon,
  rightIconStyle,
  onRightIconPress,
  error,
  errorMessage,
  shakeErrorMessage = false,
  ...props
}, ref) {
  const shakeAnim = (0, _react.useRef)(new _reactNative.Animated.Value(0)).current;
  (0, _react.useEffect)(() => {
    if (shakeErrorMessage) {
      console.log('Shaking!');
      (0, _Shake.shake)(shakeAnim);
    }
  }, [shakeErrorMessage]);
  const renderIcon = (icon, style) => {
    if (/*#__PURE__*/_react.default.isValidElement(icon)) {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
        style: style,
        children: icon
      });
    } else if (typeof icon === 'function') {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
        style: style,
        children: /*#__PURE__*/_react.default.createElement(icon)
      });
    } else {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Image, {
        source: icon,
        style: style
      });
    }
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
      style: [styles.container, containerStyle],
      children: [icon && renderIcon(icon, iconStyle), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.TextInput, {
        ref: ref,
        style: [styles.input, props.multiline && styles.multilineInput, style],
        ...props
      }), rightIcon && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.TouchableOpacity, {
        onPress: onRightIconPress,
        children: renderIcon(rightIcon, rightIconStyle)
      })]
    }), error && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Animated.Text, {
      style: [styles.errorText, {
        transform: [{
          translateX: shakeAnim
        }]
      }],
      children: errorMessage
    })]
  });
});
const styles = _reactNative.StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    paddingHorizontal: 20,
    borderColor: '#ddd',
    borderRadius: 30,
    padding: 10,
    marginBottom: 15,
    backgroundColor: '#fff'
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 20
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: _reactNative.Platform.OS === 'ios' ? 12 : 8,
    paddingHorizontal: 10
  },
  multilineInput: {
    minHeight: 100,
    textAlignVertical: 'top'
  },
  rightIcon: {
    marginLeft: 10,
    width: 20,
    height: 20
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    marginTop: -8,
    marginLeft: 14
  }
});
//# sourceMappingURL=InputField.js.map