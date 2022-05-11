import React, {FC, memo, useEffect, useMemo, useState} from 'react';
import styles from './cartItem.module.scss';
import {ProductInCart} from "../../../../interfaces/ProductInCart";
import {IProductImage, peopleImages, starshipImages} from "../../../../assets/productImages";
import {useDispatch} from "react-redux";
import * as util from "../../../../util";
import {CartProductPeople, CartProductStarship} from "../../../../store/types/_app/cart";

export interface CartItemProps {
    cartProduct: CartProductPeople | CartProductStarship;
    minusFunc: Function;
    plusFunc: Function;
    deleteAllFunc: Function;
    type: 'starships' | 'people'
}

const CartItem:FC<CartItemProps> = (
    {
        cartProduct,
        minusFunc,
        deleteAllFunc,
        plusFunc,
        type,

    }
) => {
    const dispatch = useDispatch();
    const [isVisiblePanel, setIsVisiblePanel] = useState(false)
    const isStarships = type === 'starships';

    const img = useMemo(() => {
        return util.getRandomImage(isStarships ? starshipImages : peopleImages)
    }, [])

    return (
        <ul className={styles.wrapper}
            onMouseOver={() => setIsVisiblePanel(true)}
            onMouseLeave={() => setIsVisiblePanel(false)}
        >
            <li>
                <div className={styles.panel_wrapper}>
                    <p className={styles.img_wrapper_}><img className={styles.img} src={img?.src} alt={img?.alt}/></p>
                    <p className={styles.count}>{cartProduct.count}</p>
                    <div className={[styles.panel, styles.list, isVisiblePanel ? styles.panel_visible : ''].join(' ')}>
                        <button onClick={() => dispatch(deleteAllFunc(cartProduct.id))} className={styles.deleteAll}>x</button>
                        <button onClick={() => dispatch(minusFunc(cartProduct.id))} className={styles.count_elem}>-</button>
                        <button onClick={() => dispatch(plusFunc(cartProduct))} className={styles.count_elem}>+</button>
                    </div>
                </div>
            </li>
            <li>
                <ul className={styles.list}>
                    <li><p className={styles.text}>Name: {cartProduct.data?.name}</p></li>
                    <li><p className={styles.text}>URL: {cartProduct.data?.url}</p></li>
                </ul>
            </li>
        </ul>
    );
}

export default CartItem;