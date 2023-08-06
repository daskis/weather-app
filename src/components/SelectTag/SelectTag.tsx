import React, {useState} from 'react';
import {SelectProps, SelectOption} from './SelectTag.props';
import cn from 'classnames';
import cls from './SelectTag.module.scss';

const SelectTag = (
    {
        options,
        selectedValue,
        onSelect,
        fontFamily = 'sans-serif',
        color = 'black', // Обновлено значение цвета по умолчанию на 'black'
        className,
        placeholder = 'Select an option',
        ...props
    }: SelectProps): JSX.Element => {
    const [isOpen, setIsOpen] = useState(false);
    const selectedOption = options.find((option) => option.value === selectedValue);

    const handleSelect = (value: string) => {
        setIsOpen(false);
        if (onSelect) {
            onSelect(value);
        }
    };

    return (
        <div
            className={cn(cls.Select, className, {
                [cls.open]: isOpen,
                [cls.black]: color === 'black',
                [cls.white]: color === 'white',
            })}
            {...props}
        >
            <div
                className={cls.selected}
                onClick={() => setIsOpen(!isOpen)}
                style={{fontFamily}}
            >
                {selectedOption ? selectedOption.label : placeholder}
                <span className={cn(cls.arrow, {[cls.rotated]: isOpen})}>&#9662;</span>
            </div>
            {isOpen && (
                <ul className={cls.options}>
                    {options.map((option) => (
                        <li
                            key={option.value}
                            className={cls.option}
                            onClick={() => handleSelect(option.value)}
                        >
                            {option.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SelectTag;
