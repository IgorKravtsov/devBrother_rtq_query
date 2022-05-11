import React, {FC, memo, ReactElement, useEffect, useMemo} from 'react';
import styles from './cartList.module.scss';
import {ProductInCart} from "../../../interfaces/ProductInCart";
import CartItem from "./cartItem/CartItem";
import * as util from '../../../util';
import {peopleImages, starshipImages} from "../../../assets/productImages";
import {
    addPersonToCart,
    // deleteAllTheseStarshipsFromCart,
    // deleteAllThesePeopleFromCart,
    // minusStarshipFromCart,
    // minusPersonFromCart,
    addStarshipToCart,
    deleteAllThesePeopleFromCart,
    deleteAllTheseStarshipsFromCart,
    minusPersonFromCart,
    minusStarshipFromCart,
    // addPersonToCart
} from '../../../store/slices/cartSlice';
import {useTypedSelector} from "../../../hooks/useTypedSelector";

export interface CartListProps {
}

const CartList:FC<CartListProps> = (): ReactElement => {

    const {starships, people} = useTypedSelector(state => state.cart);

    const isRenderPeople = people.length > 0;
    const isRenderStarships = starships.length > 0;

    // const memoPeopleImage = useMemo(() => {
    //     return util.getRandomImage(peopleImages);
    // }, [])
    //
    // const memoStarshipsImages = useMemo(() => {
    //     return util.getRandomImage(starshipImages);;
    // }, [])

    return (
        <main>
            <section>
                {isRenderPeople && <h3 className={styles.title}>PEOPLE</h3>}
                <ul className={styles.list}>
                    {isRenderPeople && people.map(person =>
                            <li><CartItem
                                key={person.id}
                                type={'people'}
                                // image={ut}
                                cartProduct={person}
                                minusFunc={minusPersonFromCart}
                                plusFunc={addPersonToCart}
                                deleteAllFunc={deleteAllThesePeopleFromCart}
                            /></li>)}
                </ul>
            </section>
            <section>
                {isRenderStarships && <h3 className={styles.title}>STARSHIPS</h3>}
                <ul className={styles.list}>
                {isRenderStarships && starships.map(starship =>
                        <li><CartItem
                            key={starship.id}
                            type={'starships'}
                            // image={memoStarshipsImages}
                            cartProduct={starship}
                            minusFunc={minusStarshipFromCart}
                            plusFunc={addStarshipToCart}
                            deleteAllFunc={deleteAllTheseStarshipsFromCart}
                        /></li>)}
                </ul>
            </section>
        </main>
    );
};

export default CartList;