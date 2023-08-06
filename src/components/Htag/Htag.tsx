import React from 'react';
import cn from "classnames";
import cls from "./Htag.module.scss"
import {HtagProps} from "./Htag.props";

const Htag = (
    {
        children,
        size,
        opacity,
        fontFamily,
        color,
        weight = 600,
        className,
        ...props
    }: HtagProps): JSX.Element => {
    switch (size) {
        case "h1":
            return (
                <h1
                    style={{fontFamily: fontFamily, fontWeight: weight}}
                    className={cn(cls.Heading, className, {
                        [cls.full]: opacity === "full",
                        [cls.half]: opacity === "half",
                        [cls.primary]: color === "primary",
                        [cls.black]: color === "black",
                    })}
                    {...props}>
                    {children}
                </h1>
            );
            break;
        case "h2":
            return (
                <h2
                    style={{fontFamily: fontFamily, fontWeight: weight}}
                    className={cn(cls.Heading, className, {
                        [cls.full]: opacity === "full",
                        [cls.half]: opacity === "half",
                        [cls.primary]: color === "primary",
                        [cls.black]: color === "black",
                    })}
                    {...props}>
                    {children}
                </h2>
            );
            break;
        case "h3":
            return (
                <h3
                    style={{fontFamily: fontFamily, fontWeight: weight}}
                    className={cn(cls.Heading, className, {
                        [cls.full]: opacity === "full",
                        [cls.half]: opacity === "half",
                        [cls.primary]: color === "primary",
                        [cls.black]: color === "black",
                    })}
                    {...props}>
                    {children}
                </h3>
            );
            break;
        case "h4":
            return (
                <h4
                    style={{fontFamily: fontFamily, fontWeight: weight}}
                    className={cn(cls.Heading, className, {
                        [cls.full]: opacity === "full",
                        [cls.half]: opacity === "half",
                        [cls.primary]: color === "primary",
                        [cls.black]: color === "black",
                    })}
                    {...props}>
                    {children}
                </h4>
            );
            break;
    }

};

export default Htag;