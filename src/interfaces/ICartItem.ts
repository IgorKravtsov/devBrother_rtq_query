import {ISwapiPeople} from "./swapi-response/IPeopleResponse";
import {ISwapiStarship} from "./swapi-response/IStarshipResponse";


export interface ICartPeople {
    data: ISwapiPeople;
    id: number

}

export interface ICartStarship {
    data: ISwapiStarship;
    id: number

}