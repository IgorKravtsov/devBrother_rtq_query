import {ISwapiStarship} from "../swapi-response/IStarshipResponse";

export interface IStarshipsData {
    items: ISwapiStarship[];
    count: number;
}