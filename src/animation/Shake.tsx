import { Animated, Platform, Vibration } from 'react-native';

export const shake = (shakeAnim: any) => {
  if (Platform.OS === 'android') {
    Vibration.vibrate(100);
  } else {
    Vibration.vibrate([0, 100, 50, 100]);
  }
  Animated.sequence([
    Animated.timing(shakeAnim, {
      toValue: -10,
      duration: 50,
      useNativeDriver: true,
    }),
    Animated.timing(shakeAnim, {
      toValue: 10,
      duration: 50,
      useNativeDriver: true,
    }),
    Animated.timing(shakeAnim, {
      toValue: -10,
      duration: 50,
      useNativeDriver: true,
    }),
    Animated.timing(shakeAnim, {
      toValue: 10,
      duration: 50,
      useNativeDriver: true,
    }),
    Animated.timing(shakeAnim, {
      toValue: 0,
      duration: 50,
      useNativeDriver: true,
    }),
  ]).start();
};
