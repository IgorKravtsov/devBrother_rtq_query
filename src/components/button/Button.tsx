import React, {ButtonHTMLAttributes, DetailedHTMLProps, FC, HTMLProps} from 'react';

import styles from './button.module.scss';

export interface ButtonProps extends HTMLProps<HTMLButtonElement> {
    // onClick: Function;
    classes?: string;
    outlineBtn?: boolean;
}

const Button:FC<ButtonProps> = (
    {
        onClick,
        classes,
        outlineBtn,
        children
    },
    props
) => {
    return (
        <button onClick={onClick} className={[styles.btn, classes, outlineBtn ? styles.outLine : ''].join(' ')} {...props}>
            {children}
        </button>
    );
};

export default Button;