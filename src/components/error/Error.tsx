import React, {FC, useEffect, useState} from 'react';

import styles from './error.module.scss';

export interface ErrorProps {
    isVisible: boolean;
    classNames?: string;
}

const Error:FC<ErrorProps> = (
    {
        isVisible,
        classNames,
        children
    }) => {
    // let classes = `${styles.error} ${props.classes }` + props.isVisible ? styles.error_visible : '';

    return (
        <div className={[styles.error, classNames, isVisible && styles.error_visible ].filter(Boolean).join(' ')}>
            {children}
        </div>
    )
}

export default Error;