import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const BASE_URL ="https://social-network.samuraijs.com/api/1.0";
const API_KEY ="89b3049a-188b-45c7-9fa4-9282d2580d18";

export const api = createApi({
  reducerPath:"api",
  tagTypes:["userInfo","login","status","profileInfo"],
  baseQuery:fetchBaseQuery({
    baseUrl:BASE_URL,
    headers: {
      'API-KEY': API_KEY,
    },
    credentials: 'include',

  }),
  endpoints:(build) => ({

    getUserInfo:build.query({
      query:() => 'auth/me',  
      providesTags: () => [{type: "userInfo", id: "LIST"}],
    }), 

    addProfileInfo:build.mutation({
      query(){
        return{
          url:'profile',
          method:'PUT',
          body:{
            aboutMe: "я круто чувак",
            contacts: {
                        skype: "skyp",
                        vk: "vk.com",
                        facebook: "facebook",
                        icq: "icq",
                        email: "email",
                        googlePlus: "gogep",
                        twitter: "twitter",
                        instagram: "instagra",
                        whatsApp:"watsap"
                      },
            lookingForAJob: true,
            lookingForAJobDescription: 'Ищу работу, знаю это это и это',
            fullName: "samurai dmitry",
          }
        }
      },
      invalidatesTags: ['profileInfo'],
    }),


    addStatus: build.mutation({
      query(value) {
        return {
          url: `profile/status`,
          method: 'PUT',
          body:{
            status:value,
          },
        }
      },
      invalidatesTags: ['status'],
    }),

    getUserStatus: build.query({
      query: (myId) =>`profile/status/${myId}`,
      providesTags: () => ['status'],

    }),




    // logIn: build.mutation({
    //   query(body) {
    //     return {
    //       url: `auth/login`,
    //       method: 'POST',
    //       body:{
    //         email:'pandai2017@gmail.com',
    //         password:'makaka2017',
    //       },
    //     }
    //   },
    //   invalidatesTags: [{ type: 'login', id: 'LIST' }],
    // }),

    
  })
});


export const {useGetProfileInfoQuery,useLogInMutation,useAddStatusMutation,useGetUserStatusQuery,useGetUserInfoQuery} = api;