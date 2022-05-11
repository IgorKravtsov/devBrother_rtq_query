import {IPeopleData} from "../../../interfaces/ISwapiStateData/IPeopleData";
import {IStarshipResponse} from "../../../interfaces/swapi-response/IStarshipResponse";
import {IPeopleResponse} from "../../../interfaces/swapi-response/IPeopleResponse";

export interface PeopleState {

    getAllPeople: {
        data: IPeopleData | null;
        status: string | null;
        error: string | null;
    }

}

export enum PeopleAllAction {
    GET_PEOPLE_ALL_SUCCESS = 'GET_PEOPLE_ALL_SUCCESS',
    GET_PEOPLE_ALL_PENDING = 'GET_PEOPLE_ALL_PENDING',
    GET_PEOPLE_ALL_FAILED = 'GET_PEOPLE_ALL_FAILED',
}

export interface getPeopleAllPending {
    type: PeopleAllAction.GET_PEOPLE_ALL_PENDING;
}

export interface getPeopleAllSuccess {
    type: PeopleAllAction.GET_PEOPLE_ALL_SUCCESS;
    payload: IPeopleResponse;
}

export interface getPeopleAllFailed {
    type: PeopleAllAction.GET_PEOPLE_ALL_FAILED;
    payload: string;
}

export type PeopleActionType =
    getPeopleAllPending |
    getPeopleAllSuccess |
    getPeopleAllFailed;