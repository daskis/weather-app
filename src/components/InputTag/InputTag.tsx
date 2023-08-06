import React, {useState} from 'react';
import {InputTagProps} from "./InputTag.props";
import cls from "./InputTag.module.scss"
import cn from "classnames";

const InputTag = (
    {
        type,
        placeholder,
        change,
        dimension = "medium",
        color = "black",
        className,
        ...props
    }: InputTagProps
): JSX.Element => {
    const [value, setValue] = useState("");

    const handleChange = (newValue: string) => {
        setValue(newValue)
        if (change) {
            change(newValue)
        }
    };
    return (
        <div
            className={cls.wrapper}>
            <input
                onChange={(e) => handleChange(e.target.value)}
                type={type}
                className={cn(cls.input, className, {
                    [cls.small]: dimension === "small",
                    [cls.medium]: dimension === "medium",
                    [cls.primary]: color === "primary",
                    [cls.black]: color === "black",
                })}
            />
            <span
                className={cn(cls.label, {})}>
                {placeholder}
            </span>
        </div>
    );
};

export default InputTag;