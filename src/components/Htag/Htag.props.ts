import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";

export interface HtagProps extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
    children: ReactNode;
    size: "h1" | "h2" | "h3" | "h4";
    opacity?: "half" | "full";
    fontFamily?: string;
    color?: "primary" | "black";
    weight?: number
}