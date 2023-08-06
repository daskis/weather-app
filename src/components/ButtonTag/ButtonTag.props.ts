import {ButtonHTMLAttributes, DetailedHTMLProps, ReactNode} from "react";
import {SizeEnum} from "../../types/ComponentTypes";

export interface ButtonTagProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
    children: ReactNode;
    rounded: "xs" | "sm" | "md" | "lg" | "xl";
    size: SizeEnum;
    appearance: "primary" | "ghost";
}