import React from 'react';

import styles from './form.module.scss';

const Form = (props) => {
    return (
        <form className={styles.wrapper} onSubmit={props.onSubmit}>
            {props.children}
        </form>
    );
};

export default Form;