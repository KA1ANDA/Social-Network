import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const BASE_URL ="https://graph.facebook.com/v16.0/";
const API_KEY ="EAADXZCTy6JeMBANg3d24NWK4qxWXTCoNyTprggtWvtdPvKrtXC6WQ18hd8skWp4ZA5AsZCWROpzZA3Gq48iGNMFwh7joaX24tzPzcmZBrqVHLrAE0ZBnQwocIyjbCIE6ZCNyZBzGIrcCWv5qIoiZANz0SnJZCEWCqyEQWyCOEacNjLdIn2bPvHADzvR6V3QoVVrd3glgEDZAxTYAHRPCKEIsu2qSsDbYGvDdgRKDusXjjeSjPEiz9LzWvAOtKVHiAemcDUZD";

export const api = createApi({
  reducerPath:"api",
  tagTypes:"",
  baseQuery:fetchBaseQuery({
    baseUrl:BASE_URL,
    prepareHeaders: (headers) => {
      headers.set('Authorization', `Bearer ${API_KEY}`);
      return headers;
    }  
  }),
  endpoints:(builder) => ({

    getProfileData:builder.query({
      query:() => 'me?fields=id,name,email,posts,picture'
    })

  })
});


export const {useGetProfileDataQuery} = api;