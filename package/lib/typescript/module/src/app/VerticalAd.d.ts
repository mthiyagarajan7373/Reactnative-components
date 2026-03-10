import React from 'react';
import { ResizeMode } from 'expo-av';
type FontWeight = 'normal' | 'bold' | 'medium';
type TextAlign = 'center' | 'left' | 'auto' | 'justify' | 'right';
interface VerticalAdProps {
    videoHeight?: number;
    autoPlay?: boolean;
    loop?: boolean;
    imageHeight?: number;
    adLayoutBackgroundColor?: string;
    titleTextColor?: string;
    descriptionTextColor?: string;
    footerTextColor?: string;
    buttonTextColor?: string;
    titleTextSize?: number;
    descriptionTextSize?: number;
    footerTextSize?: number;
    buttonTextSize?: number;
    buttonBackgroundColor?: string;
    buttonBorderRadius?: number;
    titleFontWeight?: FontWeight;
    descriptionFontWeight?: FontWeight;
    footerFontWeight?: FontWeight;
    buttonFontWeight?: FontWeight;
    videoResizeMode?: ResizeMode;
    imageResizeMode?: ResizeMode;
    titleTextAlign?: TextAlign;
    descriptionTextAlign?: TextAlign;
    footerTextAlign?: TextAlign;
    videoCornerRadius?: number;
    imageCornerRadius?: number;
    videoBackgroundColor?: string;
    imageBackgroundColor?: string;
}
export declare const VerticalAd: React.FC<VerticalAdProps>;
export {};
//# sourceMappingURL=VerticalAd.d.ts.map