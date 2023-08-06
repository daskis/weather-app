import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";

export interface PtagProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
    children: ReactNode;
    size: "small" | "medium" | "large";
    opacity?: "half" | "full";
    fontFamily?: string;
    color?: "primary" | "black";
}