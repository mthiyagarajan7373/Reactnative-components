import type { JSX } from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  type StyleProp,
  type ViewStyle,
  type TextStyle,
  type DimensionValue,
  Image,
  View,
  type ImageSourcePropType,
} from 'react-native';

type ButtonFieldProps = {
  title: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  disabled?: boolean;
  color?: string;
  borderSize?: number;
  borderColor?: string;
  fontColor?: string;
  fontSize?: number;
  borderRadius?: number;
  width?: DimensionValue | undefined;
  disabledColor?: string;
  disabledTextColor?: string;
  iconAlign?: 'left' | 'right' | 'top' | 'bottom';
  svgIcon?: JSX.Element;
  imageIconUrl?: ImageSourcePropType;
  imageIconresizeMode?: 'cover' | 'contain' | 'stretch' | 'repeat' | 'center';
  imageIconHeight?: number;
  imageIconreWidth?: number;
};

export const ButtonField: React.FC<ButtonFieldProps> = ({
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
  imageIconreWidth = 24,
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
      flexDirection:
        iconAlign === 'top' || iconAlign === 'bottom' ? 'column' : 'row',
    },
    text: {
      color: disabled && disabledTextColor ? disabledTextColor : fontColor,
      fontSize: fontSize,
      letterSpacing: 0.5,
    },
    disabled: {
      opacity: 0.6,
      backgroundColor: disabledColor,
    },
  });
  return (
    <TouchableOpacity
      style={[styles.button, disabled && styles.disabled, style]}
      onPress={onPress}
      activeOpacity={0.8}
      disabled={disabled}
    >
      {(iconAlign === 'top' || iconAlign === 'left') && imageIconUrl && (
        <Image
          source={imageIconUrl}
          style={{
            height: imageIconHeight,
            width: imageIconreWidth,
            resizeMode: imageIconresizeMode,
            marginBottom: iconAlign === 'top' ? 10 : 0,
            marginRight: iconAlign === 'left' ? 10 : 0,
          }}
        />
      )}
      {(iconAlign === 'top' || iconAlign === 'left') && svgIcon && (
        <View
          style={{
            marginBottom: iconAlign === 'top' ? 10 : 0,
            marginRight: iconAlign === 'left' ? 10 : 0,
          }}
        >
          {svgIcon}
        </View>
      )}
      <Text style={[styles.text, textStyle]}>{title}</Text>
      {(iconAlign === 'right' || iconAlign === 'bottom') && imageIconUrl && (
        <Image
          source={imageIconUrl}
          style={{
            height: imageIconHeight,
            width: imageIconreWidth,
            resizeMode: imageIconresizeMode,
            marginTop: iconAlign === 'bottom' ? 10 : 0,
            marginLeft: iconAlign === 'right' ? 10 : 0,
          }}
        />
      )}
      {(iconAlign === 'right' || iconAlign === 'bottom') && svgIcon && (
        <View
          style={{
            marginTop: iconAlign === 'bottom' ? 10 : 0,
            marginLeft: iconAlign === 'right' ? 10 : 0,
          }}
        >
          {svgIcon}
        </View>
      )}
    </TouchableOpacity>
  );
};
