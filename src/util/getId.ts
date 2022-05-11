import {ISwapiStarship} from "../interfaces/swapi-response/IStarshipResponse";
import {ISwapiPeople} from "../interfaces/swapi-response/IPeopleResponse";

export const getId = (product: ISwapiStarship | ISwapiPeople) => {
    const regex = /\d+/g;
    const idArr = product.url.match(regex);
    return idArr && idArr[0];
}