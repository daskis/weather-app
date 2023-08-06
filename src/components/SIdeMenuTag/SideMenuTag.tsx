import React, { useState } from 'react';
import { SideMenuTagProps } from './SideMenuTag.props';
import cn from 'classnames';
import cls from './SideMenuTag.module.scss';

const SideMenuTag: React.FC<SideMenuTagProps> = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <button className={cls.openButton} onClick={handleToggle}>
                <div className={cls.burgerIcon}>
                    <div className={cls.line}></div>
                    <div className={cls.line}></div>
                    <div className={cls.line}></div>
                </div>
            </button>
            <div
                className={cn(cls.overlay, {
                    [cls.overlayOpen]: isOpen,
                })}
                onClick={handleToggle}
            ></div>
            <div
                className={cn(cls.sidebarContent, {
                    [cls.open]: isOpen,
                })}
            >
                <button className={cls.closeButton} onClick={handleToggle}>
                    <span className={cls.crossIcon}>&times;</span>
                </button>
                {children}
            </div>
        </>
    );
};

export default SideMenuTag;
