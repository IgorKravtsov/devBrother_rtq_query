import {LocalstorageKey} from "../types/LocalstorageKey";
import {ISwapiStarship} from "../interfaces/swapi-response/IStarshipResponse";
import {ISwapiPeople} from "../interfaces/swapi-response/IPeopleResponse";

export const parseLocalstorageToMakeCart = (parsedStarships: ISwapiStarship[], parsedPeople: ISwapiPeople[]) => {

    function getMap(arr: ISwapiPeople[] | ISwapiStarship[]): Map<string, number> {
        const map:any = new Map<string, number>();

        arr.forEach(item => {
            const name = item.name;
            if(!map.has(name)) {
                map.set(name, 1);
            } else {
                const count: number = map.get(name) + 1;
                map.set(name, count)
            }
        })
        return map;
    }

    const starships = getMap(parsedStarships)
    const people = getMap(parsedPeople)


   return [starships, people];
}