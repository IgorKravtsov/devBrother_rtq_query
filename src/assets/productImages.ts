import starship1 from './img/starships/starship1.jpg';
import starship2 from './img/starships/starship2.jpg';
import starship3 from './img/starships/starship3.jpg';
import starship4 from './img/starships/starship4.jpg';
import starship5 from './img/starships/starship5.jpg';

import jedi1 from './img/people/jedi1.png';
import jedi2 from './img/people/jedi2.jpg';
import jedi3 from './img/people/jedi3.jpg';
import jedi4 from './img/people/jedi4.jpg';
import jedi5 from './img/people/jedi5.jpg';

export interface IProductImage {
    src: string;
    alt: string;
}

export const starshipImages: IProductImage[] = [
    {
        src: starship1,
        alt: starship1.toLowerCase()
    },
    {
        src: starship2,
        alt: starship1.toLowerCase()
    },
    {
        src: starship3,
        alt: starship1.toLowerCase()
    },
    {
        src: starship4,
        alt: starship1.toLowerCase()
    },
    {
        src: starship5,
        alt: starship1.toLowerCase()
    },
]

export const peopleImages: IProductImage[] = [
    {
        src: jedi1,
        alt: starship1.toLowerCase()
    },
    {
        src: jedi2,
        alt: starship2.toLowerCase()
    },
    {
        src: jedi3,
        alt: starship3.toLowerCase()
    },
    {
        src: jedi4,
        alt: starship4.toLowerCase()
    },
    {
        src: jedi5,
        alt: starship5.toLowerCase()
    },
]