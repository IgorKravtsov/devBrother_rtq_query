import {IProductImage} from "../../assets/productImages";

export const getRandomImage = (images: IProductImage[]): IProductImage => {
    const rand = Math.floor(Math.random() * images.length);
    return images[rand];
}