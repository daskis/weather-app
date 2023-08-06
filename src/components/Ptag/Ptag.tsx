import React from 'react';
import {PtagProps} from "./Ptag.props";
import cn from "classnames";
import cls from "./Ptag.module.scss"
const Ptag = (
    {
        children,
        size,
        opacity,
        fontFamily = "sans-serif",
        color = "black",
        className,
        ...props
    } : PtagProps) : JSX.Element => {
    return (
        <p
            style={{fontFamily: fontFamily}}
            className={cn(cls.P, className, {
            [cls.small] : size === "small",
            [cls.medium] : size === "medium",
            [cls.large] : size === "large",
            [cls.full] : opacity === "full",
            [cls.half] : opacity === "half",
            [cls.primary] : color === "primary",
            [cls.black] : color === "black",
        })}
           {...props}>
            {children}
        </p>
    );
};

export default Ptag;