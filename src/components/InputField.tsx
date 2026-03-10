import React, { forwardRef, useEffect, useRef } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Image,
  type TextInputProps,
  TouchableOpacity,
  Platform,
  Animated,
} from 'react-native';
import { shake } from '../animation/Shake';

type Props = TextInputProps & {
  icon?: any;
  iconStyle?: object;
  containerStyle?: object;
  imageStyle?: any;
  rightIcon?: any;
  rightIconStyle?: object;
  onRightIconPress?: () => void;
  error?: boolean;
  errorMessage?: string;
  shakeErrorMessage?: boolean;
};

export const InputField = forwardRef<TextInput, Props>(function InputField(
  {
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
  },
  ref
) {
  const shakeAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    if (shakeErrorMessage) {
      console.log('Shaking!');
      shake(shakeAnim);
    }
  }, [shakeErrorMessage]);

  const renderIcon = (icon: any, style: any) => {
    if (React.isValidElement(icon)) {
      return <View style={style}>{icon}</View>;
    } else if (typeof icon === 'function') {
      return <View style={style}>{React.createElement(icon)}</View>;
    } else {
      return <Image source={icon} style={style} />;
    }
  };

  return (
    <View>
      <View style={[styles.container, containerStyle]}>
        {icon && renderIcon(icon, iconStyle)}
        <TextInput
          ref={ref}
          style={[
            styles.input,
            props.multiline && styles.multilineInput,
            style,
          ]}
          {...props}
        />
        {rightIcon && (
          <TouchableOpacity onPress={onRightIconPress}>
            {renderIcon(rightIcon, rightIconStyle)}
          </TouchableOpacity>
        )}
      </View>
      {error && (
        <Animated.Text
          style={[styles.errorText, { transform: [{ translateX: shakeAnim }] }]}
        >
          {errorMessage}
        </Animated.Text>
      )}
    </View>
  );
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
    backgroundColor: '#fff',
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 20,
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: Platform.OS === 'ios' ? 12 : 8,
    paddingHorizontal: 10,
  },
  multilineInput: {
    minHeight: 100,
    textAlignVertical: 'top',
  },
  rightIcon: {
    marginLeft: 10,
    width: 20,
    height: 20,
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    marginTop: -8,
    marginLeft: 14,
  },
});
