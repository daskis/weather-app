import React, {useState} from 'react';
import {CollapseTagProps} from "./CollapseTag.props";
import cls from "./CollapseTag.module.scss"
import cn from "classnames";
import Htag from "../Htag/Htag";
import Ptag from "../Ptag/Ptag";

const CollapseTag = (
    {
        title,
        text,
        isOpen,
        size,
        color,
        className,
        ...props
    }: CollapseTagProps
): JSX.Element => {
    const [open, setOpen] = useState(false)
    const handleOpen = () => {
        setOpen(!open)
    }
    return (
        <div
            className={cn(cls.wrapper, className, {
                [cls.primary] : color === "primary",
                [cls.black] : color === "black",
            })}>
           <div
               onClick={handleOpen}
               className={cls.titleWrapper}>
               <Htag
                   className={cn(cls.title)}
                   size={size === "small" ? "h4" : "h3"}
               >
                   {title}
               </Htag>
               <span className={cn(cls.arrow, {
                   [cls.turned] : open
               })}>
                   &#9662;
               </span>
           </div>
            <p
                className={cn(cls.text, {
                    [cls.close] : !open,
                    [cls.open] : open,
                })}
            >
                {text}
            </p>
        </div>
    );
};

export default CollapseTag;