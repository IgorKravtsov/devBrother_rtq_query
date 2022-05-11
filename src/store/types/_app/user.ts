import {UserDTO} from "../../../interfaces/userDTO";


export interface UserState {
    userData: UserDTO | null;
}

export enum UserAction {
    SET_USER_DATA="SET_USER_DATA",
}

export interface SetUserDataAction {
    type: UserAction.SET_USER_DATA;
    payload: UserDTO;
}

// export const setUserData = UserActionsEnum.SET_USER_DATA;


export type UserActionType =
    SetUserDataAction;
