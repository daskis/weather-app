import React, {DetailedHTMLProps, HTMLAttributes, LabelHTMLAttributes} from 'react';

export interface SwitchTagProps extends DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement> {
    checked: boolean;
    change?: (newValue: boolean) => void;
    onText?: string;
    offText?: string;
    color?: string;
}
