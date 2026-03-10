"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DropDownField = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _SvgDropDownArrow = _interopRequireDefault(require("../assets/icons/SvgDropDownArrow.js"));
var _Shake = require("../animation/Shake.js");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const DropDownField = ({
  placeholder,
  value,
  onValueChange,
  options,
  icon,
  style,
  containerStyle,
  disabled = false,
  menuItemTextStyle,
  error,
  errorMessage,
  shakeErrorMessage = false
}) => {
  const [visible, setVisible] = (0, _react.useState)(false);
  const rotateAnim = (0, _react.useRef)(new _reactNative.Animated.Value(0)).current;
  const selectedLabel = options.find(opt => opt.value === value)?.label;
  const shakeAnim = (0, _react.useRef)(new _reactNative.Animated.Value(0)).current;
  const isImageSource = value => {
    return typeof value === 'number' || typeof value === 'object' && value !== null && 'uri' in value;
  };
  (0, _react.useEffect)(() => {
    if (shakeErrorMessage) {
      console.log('Shaking!');
      (0, _Shake.shake)(shakeAnim);
    }
  }, [shakeErrorMessage]);
  (0, _react.useEffect)(() => {
    _reactNative.Animated.timing(rotateAnim, {
      toValue: visible ? 1 : 0,
      duration: 200,
      easing: _reactNative.Easing.ease,
      useNativeDriver: true
    }).start();
  }, [visible]);
  const rotate = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg']
  });
  const handleSelect = val => {
    onValueChange(val);
    setVisible(false);
  };
  const styles = _reactNative.StyleSheet.create({
    container: {
      marginBottom: 12,
      width: '100%'
    },
    input: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: 'white',
      borderRadius: 32,
      borderWidth: 1,
      borderColor: '#CCCCCC',
      height: 56,
      paddingHorizontal: 16,
      justifyContent: 'space-between'
    },
    icon: {
      marginRight: 8
    },
    textValue: {
      flex: 1,
      fontSize: 16,
      color: 'black'
    },
    placeholder: {
      color: '#999999'
    },
    modalOverlay: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: 'rgba(0,0,0,0.2)'
    },
    dropdown: {
      marginHorizontal: 16,
      backgroundColor: '#fff',
      borderRadius: 24,
      paddingVertical: 8,
      maxHeight: 300
    },
    item: {
      paddingVertical: 12,
      paddingHorizontal: 16,
      borderRadius: 24
    },
    selectedItem: {
      backgroundColor: '#5173fe'
    },
    itemText: {
      fontSize: 16,
      color: 'black'
    },
    selectedText: {
      color: 'white'
    },
    errorText: {
      color: 'red',
      fontSize: 16,
      marginTop: 8,
      marginLeft: 14
    }
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
    style: [styles.container, containerStyle],
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.TouchableOpacity, {
        onPress: () => !disabled && setVisible(!visible),
        activeOpacity: 0.8,
        style: [styles.input, style],
        children: [icon && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
          style: styles.icon,
          children: typeof icon === 'function' ? (/*#__PURE__*/_react.default.createElement(icon)) : isImageSource(icon) ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Image, {
            source: icon,
            style: {
              width: 24,
              height: 24
            }
          }) : null
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Text, {
          style: [styles.textValue, !selectedLabel && styles.placeholder],
          children: selectedLabel || placeholder
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Animated.View, {
          style: {
            transform: [{
              rotate
            }]
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_SvgDropDownArrow.default, {
            width: 24,
            height: 16
          })
        })]
      }), error && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Animated.Text, {
        style: [styles.errorText, {
          transform: [{
            translateX: shakeAnim
          }]
        }],
        children: errorMessage
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Modal, {
      transparent: true,
      visible: visible,
      animationType: "fade",
      onRequestClose: () => setVisible(false),
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.TouchableWithoutFeedback, {
        onPress: () => setVisible(false),
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
          style: styles.modalOverlay,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
            style: styles.dropdown,
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.FlatList, {
              data: options,
              keyExtractor: item => item.value,
              renderItem: ({
                item
              }) => {
                const isSelected = item.value === value;
                return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.TouchableOpacity, {
                  onPress: () => handleSelect(item.value),
                  style: [styles.item, isSelected && styles.selectedItem],
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Text, {
                    style: [styles.itemText, menuItemTextStyle, isSelected && styles.selectedText],
                    children: item.label
                  })
                });
              }
            })
          })
        })
      })
    })]
  });
};
exports.DropDownField = DropDownField;
//# sourceMappingURL=DropDownField.js.map