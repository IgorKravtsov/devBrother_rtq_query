import {ISwapiStarship} from "../../../interfaces/swapi-response/IStarshipResponse";
import {ISwapiPeople} from "../../../interfaces/swapi-response/IPeopleResponse";


export interface CartProductStarship {
    data: ISwapiStarship | null
    count: number
    id: number
}

export interface CartProductPeople {
    data: ISwapiPeople | null
    count: number
    id: number
}

export interface CartState {
    starships: CartProductStarship[];
    people: CartProductPeople[];
}

export enum CartAction {
    ADD_TO_CART_STARSHIP="ADD_TO_CART_STARSHIP",
    ADD_TO_CART_PEOPLE="ADD_TO_CART_PEOPLE",

    SET_STARSHIPS_FROM_LOCALSTORAGE_TO_CART="SET_STARSHIPS_FROM_LOCALSTORAGE_TO_CART",
    SET_PEOPLE_FROM_LOCALSTORAGE_TO_CART="SET_PEOPLE_FROM_LOCALSTORAGE_TO_CART",
}

export interface AddToCartStarshipAction {
    type: CartAction.ADD_TO_CART_STARSHIP;
    payload: ISwapiStarship;
}

export interface AddToCartPeopleAction {
    type: CartAction.ADD_TO_CART_PEOPLE;
    payload: ISwapiPeople;
}

export interface setStarshipsFromLocalstorageToReduxAction {
    type: CartAction.SET_STARSHIPS_FROM_LOCALSTORAGE_TO_CART;
    payload: ISwapiStarship[];
}

export interface setPeopleFromLocalstorageToReduxAction {
    type: CartAction.SET_PEOPLE_FROM_LOCALSTORAGE_TO_CART;
    payload: ISwapiPeople[];
}


export type CartActionType =
    AddToCartStarshipAction |
    AddToCartPeopleAction |
    setStarshipsFromLocalstorageToReduxAction |
    setPeopleFromLocalstorageToReduxAction;
