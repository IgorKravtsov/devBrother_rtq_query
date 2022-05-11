import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IPeopleResponse, ISwapiPeople} from "../interfaces/swapi-response/IPeopleResponse";


export const peopleSlice = createApi({
    reducerPath: 'people',
    baseQuery: fetchBaseQuery({baseUrl: "https://swapi.dev/api"}),
    endpoints: (builder) => ({

        getPeople: builder.query<IPeopleResponse, any>({
            query: () => '/people'
        }),
        getOnePerson: builder.query<ISwapiPeople, number | null>({
            query: (id: number | null) => {
                if(id) {
                    return `/people/${id}`
                } else {
                    return  'some_Wrong_string'
                }
            }
        }),

    })
})

export const {useGetPeopleQuery, useGetOnePersonQuery} = peopleSlice;
