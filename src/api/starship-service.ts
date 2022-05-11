import axios, {AxiosResponse} from "axios";
import {IStarshipResponse, ISwapiStarship} from "../interfaces/swapi-response/IStarshipResponse";


export class StarshipService {
    static _baseUrl = "https://swapi.dev/api";

    static async getAllStarships():Promise<AxiosResponse<IStarshipResponse>> {
        return axios.get<IStarshipResponse>(`${this._baseUrl}/starships`);
    }

    static async getOneStarship(id: number):Promise<AxiosResponse<ISwapiStarship>> {
        return axios.get<ISwapiStarship>(`${this._baseUrl}/starships/${id}`);
    }
}