import {UserState} from "../types/_app/user";
import {UserDTO} from "../../interfaces/userDTO";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";


const initialState: UserState = {
    userData: {} as UserDTO,

}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserData: (state, action:PayloadAction<UserDTO>) => {
            state.userData = action.payload
        }
    }
})

const {actions, reducer} = userSlice;

export default reducer;

export const {
    setUserData
} = actions;