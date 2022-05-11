import {ISwapiStarship} from "../../../interfaces/swapi-response/IStarshipResponse";


export interface OneStarshipState {

    getOneStarship: {
        data: ISwapiStarship | null;
        status: string | null;
        error: string | null;
    }

}

export enum OneStarshipAction {
    GET_ONE_STARSHIP_SUCCESS = 'GET_ONE_STARSHIP_SUCCESS',
    GET_ONE_STARSHIP_PENDING = 'GET_ONE_STARSHIP_PENDING',
    GET_ONE_STARSHIP_FAILED = 'GET_ONE_STARSHIP_FAILED',
}

export interface getOneStarshipPending {
    type: OneStarshipAction.GET_ONE_STARSHIP_PENDING;
}

export interface getOneStarshipSuccess {
    type: OneStarshipAction.GET_ONE_STARSHIP_SUCCESS;
    payload: ISwapiStarship;
}

export interface getOneStarshipFailed {
    type: OneStarshipAction.GET_ONE_STARSHIP_FAILED;
    payload: string;
}

export type OneStarshipActionType =
    getOneStarshipPending |
    getOneStarshipSuccess |
    getOneStarshipFailed;
