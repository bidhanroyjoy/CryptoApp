import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoNewsHeader={
    'x-bingapis-sdk': 'true',
    'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
    'x-rapidapi-key': ' KJwZZIJSFImshuivMSVGaiYzkRomp15f2vKjsnK4bKzuUzVLzA'
}             

const baseUrl = 'https://bing-news-search1.p.rapidapi.com'

const createRequest = (url)=> ({url, headers:cryptoNewsHeader})

export const cryptoNewsApi = createApi({
    reducerPath:"cryptoNewsApi",
    baseQuery:fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptosNews : builder.query({
            query: ({ newsCategory, count }) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
        })
    })
});

export const {
    useGetCryptosNewsQuery,
} = cryptoNewsApi;















// KJwZZIJSFImshuivMSVGaiYzkRomp15f2vKjsnK4bKzuUzVLzA


// var options = {
//     method: 'GET',
//     url: 'https://bing-news-search1.p.rapidapi.com/news',
//     params: {safeSearch: 'Off', textFormat: 'Raw'},
//     headers: {
//       'x-bingapis-sdk': 'true',
//       'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
//       'x-rapidapi-key': 'b8b1a864c5msh054ecca674a9e45p1ffa4ejsn0b6aa585d454'
//     }
//   };