import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {CartProductPeople, CartProductStarship, CartState} from "../types/_app/cart";
import {ICartPeople, ICartStarship} from "../../interfaces/ICartItem";




const initialState: CartState = {
    starships: [],
    people: []

}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {

        addStarshipToCart: (state, action:PayloadAction<ICartStarship>) => {
            const starship = state.starships.find(starship => starship.id === action.payload.id);
            if(!starship) {
                state.starships.push({data: action.payload.data, id: action.payload.id, count: 1})
            } else {
                starship.count++
            }
        },
        addPersonToCart: (state, action:PayloadAction<ICartPeople>) => {
            const person = state.people.find(person => person.id === action.payload.id);
            if(!person) {
                state.people.push({data: action.payload.data, id: action.payload.id, count: 1})
            } else {
                person.count++
            }
        },
        setStarshipsFromLocalstorageToCart: (state, action:PayloadAction<CartProductStarship[]>) => {
            state.starships = action.payload
        },
        setPeopleFromLocalstorageToCart: (state, action:PayloadAction<CartProductPeople[]>) => {
            state.people = action.payload
        },
        minusPersonFromCart: (state, action:PayloadAction<number>) => {
            const person = state.people.find(person => person.id === action.payload);
            if(person && --person.count < 1) {
                state.people = state.people.filter(p => p.id !== person.id);
            }
        },
        minusStarshipFromCart: (state, action:PayloadAction<number>) => {
            const starship = state.starships.find(starship => starship.id === action.payload);
            if(starship && --starship.count < 1) {
                state.starships = state.starships.filter(s => s.id !== starship.id);
            }
        },
        deleteAllThesePeopleFromCart: (state, action:PayloadAction<number>) => {
            state.people = state.people.filter(person => person.id !== action.payload);
        },
        deleteAllTheseStarshipsFromCart: (state, action:PayloadAction<number>) => {
            state.starships = state.starships.filter(starship => starship.id !== action.payload);
        },
    }
})

const {actions, reducer} = cartSlice;

export default reducer;

export const {

    setStarshipsFromLocalstorageToCart,
    setPeopleFromLocalstorageToCart,
    addStarshipToCart,
    addPersonToCart,
    minusPersonFromCart,
    minusStarshipFromCart,
    deleteAllThesePeopleFromCart,
    deleteAllTheseStarshipsFromCart,

} = actions;