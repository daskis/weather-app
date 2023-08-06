import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";

export interface CollapseTagProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    title: string;
    isOpen: boolean;
    text: ReactNode;
    size: "small" | "medium";
    color: "primary" | "black"
}