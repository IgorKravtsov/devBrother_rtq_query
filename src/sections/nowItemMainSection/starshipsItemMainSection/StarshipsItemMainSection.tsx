import React, {FC, ReactElement} from 'react';
import styles from './starshipsItemMainSection.module.scss';
import {IProductImage} from "../../../assets/productImages";
import {ISwapiStarship} from "../../../interfaces/swapi-response/IStarshipResponse";

export interface StarshipsItemMainSectionProps {
    img: IProductImage;
    starship: ISwapiStarship;
}

const StarshipsItemMainSection:FC<StarshipsItemMainSectionProps> = (
    {
        img,
        starship,
    }): ReactElement => {

    const renderItems = (): ReactElement[][] => {
        const res: ReactElement[][] = [];
        let counter = 0, tmpArr: ReactElement[] = [];
        for(const key in starship) {
            // @ts-ignore
            tmpArr.push(<li key={key}><p><span className={styles.block_title}>{key.toUpperCase()}</span> : {starship[key]}</p></li>)

            if(++counter % 3 === 0) {
                res.push(tmpArr);
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
            <h2 className={styles.title}>{starship.name}</h2>
            <ul>
                {renderItems().map((block,index) => <ul
                    className={styles.block}
                    key={index + Date.now()}>{block}</ul>)}
            </ul>
        </>
    );
};

export default StarshipsItemMainSection;