import React from 'react';
import {ButtonTagProps} from "./ButtonTag.props";
import cls from "./ButtonTag.module.scss";
import cn from "classnames";

const ButtonTag = (
    {
        children,
        rounded,
        size,
        appearance,
        className,
        ...props
    }: ButtonTagProps) : JSX.Element => {
    return (
        <button className={cn(cls.Button, className, {
            [cls.primary]: appearance === "primary",
            [cls.ghost]: appearance === "ghost",
            [cls.xs]: rounded === "xs",
            [cls.sm]: rounded === "sm",
            [cls.md]: rounded === "md",
            [cls.lg]: rounded === "lg",
            [cls.xl]: rounded === "xl",
            [cls.small]: size === "small",
            [cls.medium]: size === "medium",
            [cls.large]: size === "large",
        })}
                {...props}
        >
            {children}
        </button>
    );
};

export default ButtonTag;