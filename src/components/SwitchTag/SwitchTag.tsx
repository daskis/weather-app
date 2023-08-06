import React, {useState} from 'react';
import {SwitchTagProps} from './SwitchTag.props';
import cn from 'classnames';
import cls from './SwitchTag.module.scss';

const SwitchTag = (
    {
        checked,
        change,
        color = 'primary',
        className,
        ...props
    }: SwitchTagProps): JSX.Element => {
    const [isChecked, setIsChecked] = useState(!checked);

    const handleToggle = () => {
        setIsChecked(!isChecked);
        if (change) {
            change(isChecked)
        }
    };

    return (

        <div
            onClick={handleToggle}
            className={cn(cls.wrapper, className, {
                [cls.checked]: isChecked,
                [cls.primary]: color === 'primary'
            })}>
            <div className={cn(cls.circle, {
                [cls.circleChecked] : isChecked
            })}></div>
        </div>
    );
};

export default SwitchTag;
