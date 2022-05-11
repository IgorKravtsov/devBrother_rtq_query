import React, {FC, ReactElement, useEffect, useState} from 'react';
import styles from './productCardsItem.module.scss';
import {ISwapiStarship} from "../../../../interfaces/swapi-response/IStarshipResponse";
import {ISwapiPeople} from "../../../../interfaces/swapi-response/IPeopleResponse";
import {IProductImage} from "../../../../assets/productImages";
import {useSwapiTypeState} from "../../../../hooks/useSwapiTypeState";
import ProductCard from "../../../../components/productCard/ProductCard";
import Button from "../../../../components/button/Button";
import {useActions} from "../../../../hooks/useActions";
import {Link} from "react-router-dom";
import * as util from '../../../../util';
import {addPersonToCart, addStarshipToCart} from '../../../../store/slices/cartSlice'
import {useDispatch} from "react-redux";

export interface ProductCardsItemProps {
    product: ISwapiStarship | ISwapiPeople;
    image: IProductImage;
    type: 'starships' | 'people';
}

const ProductCardsItem:FC<ProductCardsItemProps> = (
    {
        product,
        image,
        type
    }): ReactElement => {

    const item = useSwapiTypeState(type, product);
    // const {addToCartStarship, addToCartPeople} = useActions();
    // const {starships, people} = useTypedSelector(state => state.cartReducer);

    const isStarships = type === 'starships';
    const itemId = util.getId(product);
    const dispatch = useDispatch();
    const [isAdded, setIsAdded] = useState(false)



    // useEffect(() => {
    //     // return () => {
    //         util.saveCartToLocalstorage(people, starships)
    //     // }
    // }, [starships, people])
    // console.log(product.url);

    const addToCart = () => {
        isStarships ?
            dispatch(addStarshipToCart({data: item.starships, id: +itemId!})) :
            dispatch(addPersonToCart({data: item.people, id: +itemId!}))
        setIsAdded(true);
        setTimeout(() => setIsAdded(false), 1000);
    }

    return (
        <li className={styles.listItem}>
            <Link  className={styles.link}
                   to={`/products/${type}/${itemId}`}
                   // to={location => `${location.pathname}?sort=name`}
            />
            {isStarships ?
                <>
                    <ProductCard image={image} classes={styles.card} type={type}>
                        <h3 className={styles.text}>MODEL: {item.starships?.model}</h3>
                    </ProductCard>
                    {/*<Button outlineBtn onClick={() => addToCartStarship(item.starships)} classes={styles.btn}>ADD</Button>*/}
                </> :
                <>
                    <ProductCard image={image} classes={styles.card} type={type}>
                        <h3 className={styles.text}>NAME: {item.people?.name}</h3>
                    </ProductCard>
                </>}
            <Button outlineBtn
                    onClick={addToCart}
                    classes={[styles.btn, isAdded ? styles.btn_added : ''].join(' ')}>{isAdded ? 'ADDED' : 'ADD'}</Button>
        </li>
    );
};

export default ProductCardsItem;