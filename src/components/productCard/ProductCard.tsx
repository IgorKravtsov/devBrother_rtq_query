import React, {FC, ReactElement} from 'react';
import styles from './productCard.module.scss';
import {IProductImage} from "../../assets/productImages";
import SwapiImage from "../swapiImage/SwapiImage";

export interface ProductCardProps {
    image: IProductImage;
    classes?: string;
    type: 'starships' | 'people';
}

const ProductCard:FC<ProductCardProps> = (
    {
        type,
        classes,
        image,
        children,
    }): ReactElement => {
    // console.log(image)
    return (
        <div className={[styles.wrapper, classes].join(' ')}>
                {/*<SwapiImage type={type} classesWrapper={styles.img_wrapper} classesImg={styles.img}/>*/}
            <p className={styles.img_wrapper}>
                <img className={styles.img} src={image.src} alt={image.alt}/>
            </p>
                {children}
        </div>
    );
};

export default ProductCard;