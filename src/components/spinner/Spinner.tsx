import React, {FC} from 'react';
import styles from './spinner.module.scss';
import spinner from './img/spinner.gif';

export interface SpinnerProps {
    classes?: string;
}

const Spinner:FC<SpinnerProps> = ({classes}) => {
    return (
        <h1 className={[styles.spinner, classes].join(' ')}>
           LOADING.......
        </h1>
    );
};

export default Spinner;