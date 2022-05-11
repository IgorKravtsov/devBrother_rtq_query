import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {IStarshipResponse, ISwapiStarship} from "../interfaces/swapi-response/IStarshipResponse";


export const starshipsSlice = createApi({
    reducerPath: 'starships',
    baseQuery: fetchBaseQuery({baseUrl: "https://swapi.dev/api"}),
    endpoints: (builder) => ({

        getStarships: builder.query<IStarshipResponse, any>({
            query: () => '/starships',
        }),
        getOneStarship: builder.query<ISwapiStarship, number | null>({
            query: (id: number | null) => {
                if(id) {
                    return `/starships/${id}`
                }
                else return 'some_wrong_string'
            },
        }),

    })
})

export const {useGetStarshipsQuery, useGetOneStarshipQuery} = starshipsSlice;
