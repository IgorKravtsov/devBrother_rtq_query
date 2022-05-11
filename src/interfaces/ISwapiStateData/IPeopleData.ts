import {ISwapiPeople} from "../swapi-response/IPeopleResponse";

export interface IPeopleData {
    items: ISwapiPeople[];
    count: number;
}