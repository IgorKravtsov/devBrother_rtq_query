import React, {FC, ReactElement, useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import Spinner from "../spinner/Spinner";
import styles from './totalCountCard.module.scss';

export interface ProductCardProps {
    isLoading?: boolean;
    error?: string;
    totalCount?: number;
    title: string;
    path: string;
}

const TotalCountCard:FC<ProductCardProps> = (
    {
        isLoading=false,
        error='',
        totalCount,
        title,
        path
    }
) => {

    const [count, setCount] = useState(totalCount);

    useEffect(() => {
        setCount(totalCount)
    }, [totalCount])

    const renderItems = (): ReactElement => {
        if(error) {
            return <h1 className={styles.error}>{error}</h1>
        }
        if(isLoading) {
            return <Spinner classes={styles.spinner}/>
        }
        return (
            <>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.count}>{count}</p>
            </>
        )
    }

    return (
        <>
            <Link className={[styles.link, isLoading || error ? styles.disabled : ''].join(' ')} to={path}/>
            <div className={styles.cardList}>
                {renderItems()}
            </div>
        </>
    );
};


export default TotalCountCard;