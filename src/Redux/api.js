import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const BASE_URL ="https://graph.facebook.com/v16.0/";
const API_KEY ="EAADXZCTy6JeMBAHmhZBOjY3Ih7RXLsu9F4Hlk6zuxNcisowDoQ57pYlwzPuL9elyKYnV8wosEzZByyRODgSAhLjUT4lhX3mCEBZBN4AnYKuHUuEtbppzGQFoeSVB2KSAaiMF4w39Lj7NUDsTZAyT3hNyZCqDO7GxdbIe9nkCjCcZCOT0Cie9EOmohH1ERAqOVFZAV7DdASh2rhf8NPGIU1pkIsOQvepu9urnLB3D1y1X3Mxp6wnmhxatBmAtITQtaB8ZD";

export const api = createApi({
  reducerPath:"api",
  tagTypes:["posts"],
  baseQuery:fetchBaseQuery({
    baseUrl:BASE_URL,
    prepareHeaders: (headers) => {
      headers.set('Authorization', `Bearer ${API_KEY}`);
      return headers;
    }  
  }),
  endpoints:(build) => ({

    getProfileData:build.query({
      query:() => 'me?fields=id,name,email,posts,picture',
      providesTags: () => [{type: "posts", id: "LIST"}],
    }),

    addPost:build.mutation({
      query(post){
        return{
          url:'me?feed',
          method:'POST',
          body:post,
        }
      },
      invalidatesTags: () => [{type: "posts", id:"LIST"}],
    })


  })
});


export const {useGetProfileDataQuery,useAddPostMutation} = api;