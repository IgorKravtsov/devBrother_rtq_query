import { ISwapiPeople } from "../../../interfaces/swapi-response/IPeopleResponse";


export interface OnePersonState {

    getOnePerson: {
        data: ISwapiPeople | null;
        status: string | null;
        error: string | null;
    }

}

export enum OnePersonAction {
    GET_ONE_PERSON_SUCCESS = 'GET_ONE_PERSON_SUCCESS',
    GET_ONE_PERSON_PENDING = 'GET_ONE_PERSON_PENDING',
    GET_ONE_PERSON_FAILED = 'GET_ONE_PERSON_FAILED',
}

export interface getOnePersonPending {
    type: OnePersonAction.GET_ONE_PERSON_PENDING;
}

export interface getOnePersonSuccess {
    type: OnePersonAction.GET_ONE_PERSON_SUCCESS;
    payload: ISwapiPeople;
}

export interface getOnePersonFailed {
    type: OnePersonAction.GET_ONE_PERSON_FAILED;
    payload: string;
}

export type OnePersonActionType =
    getOnePersonPending |
    getOnePersonSuccess |
    getOnePersonFailed;
