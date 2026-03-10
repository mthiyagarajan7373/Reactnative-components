import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  Easing,
  StyleSheet,
  FlatList,
  Modal,
  TouchableWithoutFeedback,
  type ImageSourcePropType,
  Image,
} from 'react-native';
import SvgDropDownArrow from '../assets/icons/SvgDropDownArrow';
import { shake } from '../animation/Shake';

type DropDownFieldProps = {
  placeholder: string;
  value: string;
  onValueChange: (value: string) => void;
  options: { label: string; value: string }[];
  icon?: React.ElementType | ImageSourcePropType;
  style?: any;
  containerStyle?: any;
  disabled?: boolean;
  menuItemTextStyle?: any;
  error?: boolean;
  errorMessage?: string;
  shakeErrorMessage?: boolean;
};

export const DropDownField: React.FC<DropDownFieldProps> = ({
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
  shakeErrorMessage = false,
}) => {
  const [visible, setVisible] = useState(false);
  const rotateAnim = useRef(new Animated.Value(0)).current;
  const selectedLabel = options.find((opt) => opt.value === value)?.label;
  const shakeAnim = useRef(new Animated.Value(0)).current;
  const isImageSource = (value: any): value is ImageSourcePropType => {
    return (
      typeof value === 'number' ||
      (typeof value === 'object' && value !== null && 'uri' in value)
    );
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
      useNativeDriver: true,
    }).start();
  }, [visible]);

  const rotate = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  const handleSelect = (val: string) => {
    onValueChange(val);
    setVisible(false);
  };

  const styles = StyleSheet.create({
    container: {
      marginBottom: 12,
      width: '100%',
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
      justifyContent: 'space-between',
    },
    icon: {
      marginRight: 8,
    },
    textValue: {
      flex: 1,
      fontSize: 16,
      color: 'black',
    },
    placeholder: {
      color: '#999999',
    },
    modalOverlay: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: 'rgba(0,0,0,0.2)',
    },
    dropdown: {
      marginHorizontal: 16,
      backgroundColor: '#fff',
      borderRadius: 24,
      paddingVertical: 8,
      maxHeight: 300,
    },
    item: {
      paddingVertical: 12,
      paddingHorizontal: 16,
      borderRadius: 24,
    },
    selectedItem: {
      backgroundColor: '#5173fe',
    },
    itemText: {
      fontSize: 16,
      color: 'black',
    },
    selectedText: {
      color: 'white',
    },
    errorText: {
      color: 'red',
      fontSize: 16,
      marginTop: 8,
      marginLeft: 14,
    },
  });

  return (
    <View style={[styles.container, containerStyle]}>
      <View>
        <TouchableOpacity
          onPress={() => !disabled && setVisible(!visible)}
          activeOpacity={0.8}
          style={[styles.input, style]}
        >
          {icon && (
            <View style={styles.icon}>
              {typeof icon === 'function' ? (
                React.createElement(icon)
              ) : isImageSource(icon) ? (
                <Image source={icon} style={{ width: 24, height: 24 }} />
              ) : null}
            </View>
          )}
          <Text
            style={[styles.textValue, !selectedLabel && styles.placeholder]}
          >
            {selectedLabel || placeholder}
          </Text>
          <Animated.View style={{ transform: [{ rotate }] }}>
            <SvgDropDownArrow width={24} height={16} />
          </Animated.View>
        </TouchableOpacity>
        {error && (
          <Animated.Text
            style={[
              styles.errorText,
              { transform: [{ translateX: shakeAnim }] },
            ]}
          >
            {errorMessage}
          </Animated.Text>
        )}
      </View>
      {/* Dropdown list rendered using Modal */}
      <Modal
        transparent
        visible={visible}
        animationType="fade"
        onRequestClose={() => setVisible(false)}
      >
        <TouchableWithoutFeedback onPress={() => setVisible(false)}>
          <View style={styles.modalOverlay}>
            <View style={styles.dropdown}>
              <FlatList
                data={options}
                keyExtractor={(item) => item.value}
                renderItem={({ item }) => {
                  const isSelected = item.value === value;
                  return (
                    <TouchableOpacity
                      onPress={() => handleSelect(item.value)}
                      style={[styles.item, isSelected && styles.selectedItem]}
                    >
                      <Text
                        style={[
                          styles.itemText,
                          menuItemTextStyle,
                          isSelected && styles.selectedText,
                        ]}
                      >
                        {item.label}
                      </Text>
                    </TouchableOpacity>
                  );
                }}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};
