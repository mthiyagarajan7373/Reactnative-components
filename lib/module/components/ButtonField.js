"use strict";

import { TouchableOpacity, Text, StyleSheet, Image, View } from 'react-native';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const ButtonField = ({
  title,
  onPress,
  style,
  textStyle,
  disabled = false,
  color = '#2E5AAC',
  borderSize = 0,
  borderColor,
  fontColor = 'white',
  borderRadius = 30,
  width = '100%',
  fontSize = 20,
  disabledColor = '#DCDEEB',
  disabledTextColor = 'white',
  svgIcon,
  imageIconUrl,
  iconAlign = 'left',
  imageIconresizeMode,
  imageIconHeight = 24,
  imageIconreWidth = 24
}) => {
  const styles = StyleSheet.create({
    button: {
      backgroundColor: color,
      paddingVertical: 16,
      borderRadius: borderRadius,
      alignItems: 'center',
      justifyContent: 'center',
      width: width,
      marginVertical: 10,
      borderColor: borderColor,
      borderWidth: borderSize,
      flexDirection: iconAlign === 'top' || iconAlign === 'bottom' ? 'column' : 'row'
    },
    text: {
      color: disabled && disabledTextColor ? disabledTextColor : fontColor,
      fontSize: fontSize,
      letterSpacing: 0.5
    },
    disabled: {
      opacity: 0.6,
      backgroundColor: disabledColor
    }
  });
  return /*#__PURE__*/_jsxs(TouchableOpacity, {
    style: [styles.button, disabled && styles.disabled, style],
    onPress: onPress,
    activeOpacity: 0.8,
    disabled: disabled,
    children: [(iconAlign === 'top' || iconAlign === 'left') && imageIconUrl && /*#__PURE__*/_jsx(Image, {
      source: imageIconUrl,
      style: {
        height: imageIconHeight,
        width: imageIconreWidth,
        resizeMode: imageIconresizeMode,
        marginBottom: iconAlign === 'top' ? 10 : 0,
        marginRight: iconAlign === 'left' ? 10 : 0
      }
    }), (iconAlign === 'top' || iconAlign === 'left') && svgIcon && /*#__PURE__*/_jsx(View, {
      style: {
        marginBottom: iconAlign === 'top' ? 10 : 0,
        marginRight: iconAlign === 'left' ? 10 : 0
      },
      children: svgIcon
    }), /*#__PURE__*/_jsx(Text, {
      style: [styles.text, textStyle],
      children: title
    }), (iconAlign === 'right' || iconAlign === 'bottom') && imageIconUrl && /*#__PURE__*/_jsx(Image, {
      source: imageIconUrl,
      style: {
        height: imageIconHeight,
        width: imageIconreWidth,
        resizeMode: imageIconresizeMode,
        marginTop: iconAlign === 'bottom' ? 10 : 0,
        marginLeft: iconAlign === 'right' ? 10 : 0
      }
    }), (iconAlign === 'right' || iconAlign === 'bottom') && svgIcon && /*#__PURE__*/_jsx(View, {
      style: {
        marginTop: iconAlign === 'bottom' ? 10 : 0,
        marginLeft: iconAlign === 'right' ? 10 : 0
      },
      children: svgIcon
    })]
  });
};
//# sourceMappingURL=ButtonField.js.map