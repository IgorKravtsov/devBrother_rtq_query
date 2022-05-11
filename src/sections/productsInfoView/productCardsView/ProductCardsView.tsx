import React, {FC, memo} from 'react';
import styles from './productCardsView.module.scss';
import {ISwapiPeople} from "../../../interfaces/swapi-response/IPeopleResponse";
import {ISwapiStarship} from "../../../interfaces/swapi-response/IStarshipResponse";
import {IProductImage} from "../../../assets/productImages";
import * as util from '../../../util';
import ProductCardsItem from "./productCardsItem/ProductCardsItem";

export interface ProductCardsViewProps {
    data?: ISwapiPeople[] | ISwapiStarship[];
    images: IProductImage[];
    type: 'starships' | 'people';
}

const ProductCardsView:FC<ProductCardsViewProps> = memo((
    {
        data,
        type,
        images}) => {


    return (
        <ul className={styles.wrapper}>
            {data && data.map((product, index) => <ProductCardsItem
                key={product.url} 
                type={type} 
                image={util.getRandomImage(images)}
                product={product}
            />)}
        </ul>
    );
});

export default ProductCardsView;