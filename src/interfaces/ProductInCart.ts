import {ISwapiStarship} from "./swapi-response/IStarshipResponse";
import {ISwapiPeople} from "./swapi-response/IPeopleResponse";

export interface ProductInCart {
    product: ISwapiStarship | ISwapiPeople;
    count: number;
}