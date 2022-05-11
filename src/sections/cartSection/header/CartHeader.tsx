import React, {FC} from 'react';
import styles from './cartHeader.module.scss';
import arrow from './img/back_arrow.svg';

export interface CartHeaderProps {
    closeFunc: Function;
}

const CartHeader:FC<CartHeaderProps> = ({closeFunc}) => {
    return (
        <div className={styles.wrapper}>
            <p onClick={() => closeFunc()} className={styles.img_wrapper}><img className={styles.back} src={arrow} alt="back"/></p>
            <h2 className={styles.title}>CART</h2>
        </div>
    );
};

export default CartHeader;