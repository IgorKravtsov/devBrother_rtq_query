import React, {FC, memo} from 'react';
import CartHeader from "./header/CartHeader";
import styles from './cartSection.module.scss';
import CartList from "./cartList/CartList";

export interface CartSectionProps {
    closeFunc: Function;
    isVisible: boolean;
}

const CartSection:FC<CartSectionProps> = ({closeFunc, isVisible}) => {
    return (
        <main className={[styles.container, isVisible ? styles.visible : ''].join(' ')}>
            <CartHeader closeFunc={closeFunc}/>
            <CartList/>
        </main>
    );
};

export default CartSection;