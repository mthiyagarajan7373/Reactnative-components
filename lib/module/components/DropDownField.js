"use strict";

import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, Animated, Easing, StyleSheet, FlatList, Modal, TouchableWithoutFeedback, Image } from 'react-native';
import SvgDropDownArrow from "../assets/icons/SvgDropDownArrow.js";
import { shake } from "../animation/Shake.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const DropDownField = ({
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
  const [visible, setVisible] = useState(false);
  const rotateAnim = useRef(new Animated.Value(0)).current;
  const selectedLabel = options.find(opt => opt.value === value)?.label;
  const shakeAnim = useRef(new Animated.Value(0)).current;
  const isImageSource = value => {
    return typeof value === 'number' || typeof value === 'object' && value !== null && 'uri' in value;
  };
  useEffect(() => {
    if (shakeErrorMessage) {
      console.log('Shaking!');
      shake(shakeAnim);
    }
  }, [shakeErrorMessage]);
  useEffect(() => {
    Animated.timing(rotateAnim, {
      toValue: visible ? 1 : 0,
      duration: 200,
      easing: Easing.ease,
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
  const styles = StyleSheet.create({
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
  return /*#__PURE__*/_jsxs(View, {
    style: [styles.container, containerStyle],
    children: [/*#__PURE__*/_jsxs(View, {
      children: [/*#__PURE__*/_jsxs(TouchableOpacity, {
        onPress: () => !disabled && setVisible(!visible),
        activeOpacity: 0.8,
        style: [styles.input, style],
        children: [icon && /*#__PURE__*/_jsx(View, {
          style: styles.icon,
          children: typeof icon === 'function' ? (/*#__PURE__*/React.createElement(icon)) : isImageSource(icon) ? /*#__PURE__*/_jsx(Image, {
            source: icon,
            style: {
              width: 24,
              height: 24
            }
          }) : null
        }), /*#__PURE__*/_jsx(Text, {
          style: [styles.textValue, !selectedLabel && styles.placeholder],
          children: selectedLabel || placeholder
        }), /*#__PURE__*/_jsx(Animated.View, {
          style: {
            transform: [{
              rotate
            }]
          },
          children: /*#__PURE__*/_jsx(SvgDropDownArrow, {
            width: 24,
            height: 16
          })
        })]
      }), error && /*#__PURE__*/_jsx(Animated.Text, {
        style: [styles.errorText, {
          transform: [{
            translateX: shakeAnim
          }]
        }],
        children: errorMessage
      })]
    }), /*#__PURE__*/_jsx(Modal, {
      transparent: true,
      visible: visible,
      animationType: "fade",
      onRequestClose: () => setVisible(false),
      children: /*#__PURE__*/_jsx(TouchableWithoutFeedback, {
        onPress: () => setVisible(false),
        children: /*#__PURE__*/_jsx(View, {
          style: styles.modalOverlay,
          children: /*#__PURE__*/_jsx(View, {
            style: styles.dropdown,
            children: /*#__PURE__*/_jsx(FlatList, {
              data: options,
              keyExtractor: item => item.value,
              renderItem: ({
                item
              }) => {
                const isSelected = item.value === value;
                return /*#__PURE__*/_jsx(TouchableOpacity, {
                  onPress: () => handleSelect(item.value),
                  style: [styles.item, isSelected && styles.selectedItem],
                  children: /*#__PURE__*/_jsx(Text, {
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
//# sourceMappingURL=DropDownField.js.map