import React, {ReactElement} from 'react';

import styles from './input.module.scss';
import Error from "../error/Error";

export interface InputProps extends  React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    error?: string;
    classes?: string;
}

const Input:React.FC<InputProps> = (props): ReactElement => {
    return (
        <div className={styles.wrapper}>
            <input className={`${styles.input} ${props.classes}`} {...props}/>
            <Error isVisible={props.error !== ''}>{props.error}</Error>
        </div>
    );
};

export default Input;