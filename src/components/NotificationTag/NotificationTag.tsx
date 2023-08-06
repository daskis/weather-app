import React from 'react';
import {NotificationTagProps} from "./NotificationTag.props";
import cls from "./NotificationTag.module.scss"
import cn from "classnames";
import Htag from "../Htag/Htag";
import Ptag from "../Ptag/Ptag";
const NotificationTag = (
    {
        title,
        text,
        type,
        size,
        className,
        ...props
    } : NotificationTagProps) => {
    return (
        <div className={cn(cls.wrapper, className, {
            [cls.medium] : size === "medium"
        })}>
            <span className={cls.close}>&#10006;	</span>
           <div className={cls.status}>
               {type === "success" && <img className={cls.icon} src="https://freepngimg.com/save/18343-success-png-image/1200x1200" alt="success"/>}
               {type === "info" && <img className={cls.icon} src="https://images.samsung.com/is/content/samsung/assets/ru/apps/mobile/samsungpay/iconi.svg?upd=1" alt="info"/>}
               {type === "denied" && <img className={cls.icon} src="https://cdn1.iconfinder.com/data/icons/smallicons-controls/32/614397-x-512.png" alt="denied"/>}

               <Htag size={size === "medium" ? "h3" : "h4"}>
                   {title}
               </Htag>
           </div>
            {text && <Ptag size={size}>{text}</Ptag>}
        </div>
    );
};

export default NotificationTag;