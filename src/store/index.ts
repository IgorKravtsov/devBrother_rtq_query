import {configureStore} from "@reduxjs/toolkit";
import cart from './slices/cartSlice';
import user from './slices/userSlice';
import categories from './slices/categoriesSlice';
import {peopleSlice} from "../api/peopleSlice";
import {starshipsSlice} from "../api/starshipsSlice";
// import * as reducers from "./mainReducer";

// const rootReducer = combineReducers(reducers);

// const rootReducer = {
//     app: combineReducers({
//
//         user: reducers.app.user.reducer,
//         cart
//
//     }),
//
//     request: combineReducers({
//
//         starships: reducers.request.starships.reducer,
//         people: reducers.request.people.reducer,
//         nowPerson: reducers.request.nowPerson.reducer,
//         nowStarship: reducers.request.nowStarship.reducer,
//
//     }),
// }

// export const store = createStore(combineReducers(rootReducer), composeWithDevTools(applyMiddleware(thunk)));

// const f = () => {}

export const store = configureStore({
    reducer: {
        cart,
        user,
        categories,
        [peopleSlice.reducerPath]: peopleSlice.reducer,
        [starshipsSlice.reducerPath]: starshipsSlice.reducer,

    },
    middleware: (getDefaultMiddleware) => {
        return  getDefaultMiddleware().concat(
            peopleSlice.middleware
        )
    },
    devTools: process.env.NODE_ENV !== 'production'
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;