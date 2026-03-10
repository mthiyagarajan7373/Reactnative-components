import type { JSX } from 'react';
import { type StyleProp, type ViewStyle, type TextStyle, type DimensionValue, type ImageSourcePropType } from 'react-native';
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
export declare const ButtonField: React.FC<ButtonFieldProps>;
export {};
//# sourceMappingURL=ButtonField.d.ts.map