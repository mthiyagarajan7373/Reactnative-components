import React from 'react';
import { type ImageSourcePropType } from 'react-native';
type DropDownFieldProps = {
    placeholder: string;
    value: string;
    onValueChange: (value: string) => void;
    options: {
        label: string;
        value: string;
    }[];
    icon?: React.ElementType | ImageSourcePropType;
    style?: any;
    containerStyle?: any;
    disabled?: boolean;
    menuItemTextStyle?: any;
    error?: boolean;
    errorMessage?: string;
    shakeErrorMessage?: boolean;
};
export declare const DropDownField: React.FC<DropDownFieldProps>;
export {};
//# sourceMappingURL=DropDownField.d.ts.map