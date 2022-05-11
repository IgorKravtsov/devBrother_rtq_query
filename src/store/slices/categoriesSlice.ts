import {CategoriesState, ICategory} from "../types/_app/categories";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {categories} from "../../pages/pgTask/main/categoriesSection/categories";
import * as util from "../../util";


const initialState: CategoriesState = {
    activeCategories: null,
    categories: [
        {
            id: util.getRandomString(),
            data: "category1",
        },
        {
            id: util.getRandomString(),
            data: "category2",
        },
        {
            id: util.getRandomString(),
            data: "category3",
        },
        {
            id: util.getRandomString(),
            data: "category4",
        },
        {
            id: util.getRandomString(),
            data: "category5",
        },
        {
            id: util.getRandomString(),
            data: "category6",
        },
        {
            id: util.getRandomString(),
            data: "category7",
        },
        {
            id: util.getRandomString(),
            data: "category8",
        },
        {
            id: util.getRandomString(),
            data: "category9",
        },
        {
            id: util.getRandomString(),
            data: "category10",
        },
    ]

}

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        addCategory: (state, action:PayloadAction<ICategory>) => {
            action.payload.data !== '' && state.categories.push(action.payload)
        },
        saveCategory: (state, action:PayloadAction<ICategory>) => {
            const category = state.categories.find(category => category.id === action.payload.id)
            if(category) {
                category.data = action.payload.data;
            }
        },
        deleteCategory: (state, action:PayloadAction<ICategory>) => {
            state.categories = state.categories.filter(category => category.id !== action.payload.id)
            state.activeCategories = state.activeCategories?.filter(aCategory => aCategory !== action.payload.id) || null
        },

        addActiveCategory: (state, action:PayloadAction<string>) => {
            if(!state.activeCategories) {
                state.activeCategories = []
            }
            if(!state.activeCategories.includes(action.payload)) {
                state.activeCategories.push(action.payload)
            }
        },
        deleteActiveCategory: (state, action:PayloadAction<string>) => {
            state.activeCategories = state.activeCategories?.filter(id => id !== action.payload) || null
            if(state.activeCategories?.length === 0) {
                state.activeCategories = null
            }
        },

    }
})

const {actions, reducer} = categoriesSlice;

export default reducer;

export const {

    addCategory,
    saveCategory,
    deleteCategory,
    addActiveCategory,
    deleteActiveCategory,

} = actions;