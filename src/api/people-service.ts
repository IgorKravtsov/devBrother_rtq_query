import axios, {AxiosResponse} from "axios";
import {IPeopleResponse, ISwapiPeople} from "../interfaces/swapi-response/IPeopleResponse";


export class PeopleService {
    static _baseUrl = "https://swapi.dev/api";

    static async getAllPeople():Promise<AxiosResponse<IPeopleResponse>> {
        return axios.get<IPeopleResponse>(`${this._baseUrl}/people`);
    }

    static async getOnePerson(id: number):Promise<AxiosResponse<ISwapiPeople>> {
        return axios.get<ISwapiPeople>(`${this._baseUrl}/people/${id}`);
    }
}