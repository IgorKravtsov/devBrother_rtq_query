import {CartProductPeople, CartProductStarship} from "../store/types/_app/cart";

export const getCountItems = (arr:  CartProductPeople[] |  CartProductStarship[]): number => {
    let count = 0;
    arr.forEach(item => {
        count += item.count;
    })
    return count;
}