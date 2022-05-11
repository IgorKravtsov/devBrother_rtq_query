import {LocalstorageKey} from "../types/LocalstorageKey";
import {CartProductPeople, CartProductStarship} from "../store/types/_app/cart";


export const saveCartToLocalstorage = (people: CartProductPeople[], starships: CartProductStarship[]) => {

    console.log(people)
    console.log(starships)
    // starships.length > 0 && localStorage.setItem(LocalstorageKey.CartStarships, JSON.stringify(starships));
    localStorage.setItem(LocalstorageKey.CartStarships, JSON.stringify(starships));
    // people.length > 0 && localStorage.setItem(LocalstorageKey.CartPeople, JSON.stringify(people));
    localStorage.setItem(LocalstorageKey.CartPeople, JSON.stringify(people));
}