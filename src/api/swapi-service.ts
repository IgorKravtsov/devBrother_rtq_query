import axios, {AxiosResponse} from "axios";
import {IPeopleResponse, ISwapiPeople} from "../interfaces/swapi-response/IPeopleResponse";
import {IStarshipResponse, ISwapiStarship} from "../interfaces/swapi-response/IStarshipResponse";

export class SwapiService {
    static _baseUrl = "https://swapi.dev/api";

    static async getPeople():Promise<AxiosResponse<IPeopleResponse>> {
        return axios.get<IPeopleResponse>(`${this._baseUrl}/people`)
    }

    static async getStarships():Promise<AxiosResponse<IStarshipResponse>> {
        return axios.get<IStarshipResponse>(`${this._baseUrl}/starships`);
    }


    static async getOnePerson(id: number):Promise<AxiosResponse<ISwapiPeople>> {
        return axios.get<ISwapiPeople>(`${this._baseUrl}/people/${id}`);
    }

    static async getOneStarship(id: number):Promise<AxiosResponse<ISwapiStarship>> {
        return axios.get<ISwapiStarship>(`${this._baseUrl}/starships/${id}`);
    }
}