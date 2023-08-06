import {DetailedHTMLProps, InputHTMLAttributes, ReactNode} from "react";

export interface InputTagProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    type: "text" | "password" | "number";
    placeholder: string;
    change?: (newValue: string) => void;
    dimension: "small" | "medium";
    color: "primary" | "black";
}