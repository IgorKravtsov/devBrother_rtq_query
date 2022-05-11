import {IStarshipsData} from "../../../interfaces/ISwapiStateData/IStarshipsData";
import {IStarshipResponse} from "../../../interfaces/swapi-response/IStarshipResponse";

export interface StarshipsState {
    getAllStarships: {
        data: IStarshipsData | null;
        status: string | null;
        error: string | null;
    }
}

export enum StarshipsAllAction {
    GET_STARSHIPS_ALL_SUCCESS = 'GET_STARSHIPS_ALL_SUCCESS',
    GET_STARSHIPS_ALL_PENDING = 'GET_STARSHIPS_ALL_PENDING',
    GET_STARSHIPS_ALL_FAILED = 'GET_STARSHIPS_ALL_FAILED',
}

export interface getStarshipsAllPending {
    type: StarshipsAllAction.GET_STARSHIPS_ALL_PENDING;
}

export interface getStarshipsAllSuccess {
    type: StarshipsAllAction.GET_STARSHIPS_ALL_SUCCESS;
    payload: IStarshipResponse;
}

export interface getStarshipsAllFailed {
    type: StarshipsAllAction.GET_STARSHIPS_ALL_FAILED;
    payload: string;
}

export type StarshipsActionType =
    getStarshipsAllPending |
    getStarshipsAllSuccess |
    getStarshipsAllFailed;