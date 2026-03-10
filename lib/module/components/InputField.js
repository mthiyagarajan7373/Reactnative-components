"use strict";

import React, { forwardRef, useEffect, useRef } from 'react';
import { View, TextInput, StyleSheet, Image, TouchableOpacity, Platform, Animated } from 'react-native';
import { shake } from "../animation/Shake.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const InputField = /*#__PURE__*/forwardRef(function InputField({
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
  const shakeAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    if (shakeErrorMessage) {
      console.log('Shaking!');
      shake(shakeAnim);
    }
  }, [shakeErrorMessage]);
  const renderIcon = (icon, style) => {
    if (/*#__PURE__*/React.isValidElement(icon)) {
      return /*#__PURE__*/_jsx(View, {
        style: style,
        children: icon
      });
    } else if (typeof icon === 'function') {
      return /*#__PURE__*/_jsx(View, {
        style: style,
        children: /*#__PURE__*/React.createElement(icon)
      });
    } else {
      return /*#__PURE__*/_jsx(Image, {
        source: icon,
        style: style
      });
    }
  };
  return /*#__PURE__*/_jsxs(View, {
    children: [/*#__PURE__*/_jsxs(View, {
      style: [styles.container, containerStyle],
      children: [icon && renderIcon(icon, iconStyle), /*#__PURE__*/_jsx(TextInput, {
        ref: ref,
        style: [styles.input, props.multiline && styles.multilineInput, style],
        ...props
      }), rightIcon && /*#__PURE__*/_jsx(TouchableOpacity, {
        onPress: onRightIconPress,
        children: renderIcon(rightIcon, rightIconStyle)
      })]
    }), error && /*#__PURE__*/_jsx(Animated.Text, {
      style: [styles.errorText, {
        transform: [{
          translateX: shakeAnim
        }]
      }],
      children: errorMessage
    })]
  });
});
const styles = StyleSheet.create({
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
    paddingVertical: Platform.OS === 'ios' ? 12 : 8,
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