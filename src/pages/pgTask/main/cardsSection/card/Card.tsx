import React, {FC, ReactElement} from 'react';
import styles from './card.module.scss';
import {ICard} from "../cards";

export interface CardProps {
    card: ICard;
}

const Card:FC<CardProps> = (
    {
        card:{img, name, categories}
    }): ReactElement => {
    return (
        <div className={styles.wrapper}>
            <p className={styles.img_wrapper}>
                <img className={styles.img} src={img.src} alt={img.alt}/>
            </p>
            <p className={styles.name}>{name}</p>
            <ul className={styles.category_list}>
                {categories.map((category,index) =>
                    <li key={category.id} className={styles.category}>
                        {category.data}
                    </li>
                )}
            </ul>
        </div>
    );
};

export default Card;