import React, {FC, ReactElement} from 'react';
import styles from './productItemMainSection.module.scss';
import {IProductImage} from "../../../assets/productImages";
import {ISwapiPeople} from "../../../interfaces/swapi-response/IPeopleResponse";
import {ISwapiStarship} from "../../../interfaces/swapi-response/IStarshipResponse";

export interface PeopleItemMainSectionProps {
    img: IProductImage;
    data?: ISwapiPeople | ISwapiStarship;
}

const ProductItemMainSection:FC<PeopleItemMainSectionProps> = (
    {
        img,
        data,
    }):ReactElement => {

    const renderItems = (): ReactElement[][] => {
        const res: ReactElement[][] = [];
        let counter = 0, tmpArr: ReactElement[] = [], prop;
        for(const key in data) {
            prop = data[key];
            if(typeof prop === "string") {
                counter++;
                tmpArr.push(<li
                    key={key}>
                    <p><span className={styles.block_title}>{key.toUpperCase()}</span> : {data[key]}</p>
                </li>)
            }

            if(counter % 3 === 0) {
                tmpArr.length > 0 && res.push(tmpArr);
                tmpArr = [];
            }
        }
        return res;
    }

    return (
        <>
            <p className={styles.img_wrapper}>
                <img className={styles.img} src={img.src} alt={img.alt}/>
            </p>
            <h2 className={styles.title}>{data?.name}</h2>
            <ul className={styles.mainList}>
                {renderItems().map((block,index) => <li key={index + Date.now()}>
                    <ul
                        className={styles.block}
                    >{block}</ul></li>)}
            </ul>
        </>
    );
};

export default ProductItemMainSection;