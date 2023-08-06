import {DetailedHTMLProps, HTMLAttributes} from "react";

export interface NotificationTagProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    title: string;
    text?: string;
    type: "success" | "info" | "denied";
    size: "small" | "medium";
}