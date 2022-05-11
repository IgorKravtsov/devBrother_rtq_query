import React, {FC} from 'react';
import styles from './swapiImage.module.scss';
import {peopleImages, starshipImages} from "../../assets/productImages";

import * as util from '../../util';



export interface SwapiImageProps {
    type: 'starships' | 'people';
    classesWrapper?: string;
    classesImg?: string;
    alt?: string;
}

const SwapiImage:FC<SwapiImageProps> = ({type,classesWrapper, classesImg}) => {

    const isStarships = type === 'starships';
    const nowImage = isStarships ?
        util.getRandomImage(starshipImages) : util.getRandomImage(peopleImages)
    return (
        <p className={[styles.img_wrapper, classesWrapper].join(' ')}>
            <img className={classesImg} src={nowImage.src} alt={nowImage.alt}/>
        </p>
    );
};

export default SwapiImage;