import {IProductImage} from "../assets/productImages";


export  const getImageByIndex = (images: IProductImage[], index: number): IProductImage => {
    let nowInd = index;
    if (index >= images.length) {
        nowInd = index - images.length;
    }
    return images[nowInd];
}