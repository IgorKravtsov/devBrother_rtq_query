import React, {FC, ReactElement, useEffect, useMemo, useState} from 'react';
import styles from './header.module.scss';
import backArrow from './img/backArrow.svg';
import cart from './img/cart.svg';
import {useNavigate} from "react-router-dom";
import PanelCart from "../panelCartCount/PanelCartPanel";
import {useActions} from "../../hooks/useActions";
import * as util from "../../util";
import {LocalstorageKey} from "../../types/LocalstorageKey";
import {useDispatch} from "react-redux";
import Portal from "../portal/Portal";
import CartSection from "../../sections/cartSection/CartSection";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {setPeopleFromLocalstorageToCart, setStarshipsFromLocalstorageToCart} from "../../store/slices/cartSlice";

export interface HeaderProps {

}

const Header:FC<HeaderProps> = (): ReactElement => {
    const navigate = useNavigate();
    const [isVisible, setIsVisible] = useState(false);
    const [isPortalVisible, setIsPortalVisible] = useState(false);

    // const {setPeopleFromLocalstorageToRedux, setStarshipsFromLocalstorageToRedux} = useActions();

    const {people, starships} = useTypedSelector(state => state.cart);

    const dispatch = useDispatch();

    useEffect(() => {
        saveCartFromLocalstorageToRedux();
    }, [])

    const saveCartFromLocalstorageToRedux = () => {
        const people = util.getCartFromLocalstorage(LocalstorageKey.CartPeople),
            starships = util.getCartFromLocalstorage(LocalstorageKey.CartStarships);

        people.length > 0 && dispatch(setPeopleFromLocalstorageToCart(people));
        starships.length > 0 && dispatch(setStarshipsFromLocalstorageToCart(starships));
    }

    useEffect(() => {
        util.saveCartToLocalstorage(people, starships)
    }, [people, starships])

    const switchVisible = (bool: boolean) => {
        setIsVisible(bool);
    }

    const memoTotal = useMemo(() => {
        return util.getCountItems(people) + util.getCountItems(starships);
    }, [people, starships])

    return (
        <header className={styles.header}>
            <p className={styles.img_wrapper}>
                <img onClick={(e) => navigate(-1)} className={styles.img} src={backArrow} alt="Back"/>
            </p>
            <ul className={styles.list}>
                <li><p className={styles.img_wrapper}>
                    <img
                        onClick={() => setIsPortalVisible(true)}
                        onMouseEnter={() => switchVisible(true)}
                        onMouseLeave={() => switchVisible(false)}
                        className={styles.img} src={cart} alt="cart"/>
                </p></li>
                <li><span className={styles.totalCount}>{memoTotal}</span></li>

            </ul>
            <PanelCart isVisible={isVisible}/>
            <Portal>
                <CartSection isVisible={isPortalVisible} closeFunc={() => setIsPortalVisible(false)}/>
            </Portal>
        </header>
    );
};

export default Header;