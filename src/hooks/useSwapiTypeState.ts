import {useEffect, useState} from "react";
import {ISwapiPeople} from "../interfaces/swapi-response/IPeopleResponse";
import {ISwapiStarship} from "../interfaces/swapi-response/IStarshipResponse";

export const useSwapiTypeState = (type: string, product: ISwapiStarship | ISwapiPeople) => {

    const [itemsPeople, setItemsPeople] = useState<ISwapiPeople>();
    const [itemsStarships, setItemsStarships] = useState<ISwapiStarship>();

    useEffect(() => {
        if(type === 'starships') {
            setItemsStarships(product as ISwapiStarship);
        } else if(type === 'people') {
            setItemsPeople(product as ISwapiPeople);
        }
    }, [])

    return {
        people: itemsPeople!,
        starships: itemsStarships!
    }
}
