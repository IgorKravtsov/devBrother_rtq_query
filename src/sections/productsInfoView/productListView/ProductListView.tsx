import React, {FC, memo, useState} from 'react';
import styles from './productListView.module.scss';
import {ISwapiPeople} from "../../../interfaces/swapi-response/IPeopleResponse";
import {ISwapiStarship} from "../../../interfaces/swapi-response/IStarshipResponse";
import ProductListItem from "./productListItem/ProductListItem";
import {IProductImage} from "../../../assets/productImages";
import * as util from '../../../util';


export interface ProductListViewProps {
    data?: ISwapiPeople[] | ISwapiStarship[];
    images: IProductImage[];
    type: 'starships' | 'people';
}

const ProductListView:FC<ProductListViewProps> = memo(({data,images, type}) => {

    return (
        <ul className={styles.wrapper}>
            {data && data.map((product,index) => <ProductListItem
                key={product.url}
                type={type}
                image={util.getRandomImage(images)}
                product={product}/>)}
        </ul>
    );
});

export default ProductListView;