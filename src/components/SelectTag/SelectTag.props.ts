import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface SelectOption {
    value: string;
    label: string;
}

export interface SelectProps
    extends Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'onSelect'> {
    options: SelectOption[];
    selectedValue: string;
    onSelect?: (value: string) => void;
    fontFamily?: string;
    color?: 'primary' | 'black' | 'white';
}
