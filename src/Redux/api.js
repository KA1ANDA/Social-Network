import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


const BASE_URL ="https://social-network.samuraijs.com/api/1.0";
const API_KEY ="89b3049a-188b-45c7-9fa4-9282d2580d18";



export const api = createApi({
  reducerPath:"api",
  tagTypes:["userInfo","login","status","profileInfo","profilePhoto","users"],
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
      query(params){
        const {aboutMe,lookingForAJob,lookingForAJobDescription,fullName,contacts: {
          facebook,
          twitter,
          instagram,
          youtube,
          github
        }
       } = params
        return{
          url:'profile',
          method:'PUT',
          body:{
            aboutMe,
            lookingForAJob,
            contacts: {
              facebook,
              github,
              instagram,
              mainLink: null,
              twitter,
              vk: null,
              website: null,
              youtube
            },
            lookingForAJobDescription,
            fullName,
          }
        }
      },
      invalidatesTags: ['profileInfo'],
    }),


    addProfilePhoto: build.mutation({
      query: (selectedFile) => {

        const formData = new FormData();
        formData.append('image', selectedFile);

        return {
          url: 'profile/photo',
          method: 'PUT',
          body: formData,
        };
      },
      invalidatesTags: ['profileInfo'],
    }),




    getProfileInfo:build.query({
      query : (myId) => `profile/${myId}`,
      providesTags: () => ['profileInfo'],
    }),



    addStatus: build.mutation({
      query(value) {
        return {
          url: `profile/status`,
          method: 'PUT',
          body:{
            status:value,
          }
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


export const {useAddStatusMutation,useGetUserStatusQuery,useGetUserInfoQuery,useAddProfileInfoMutation,useGetProfileInfoQuery,useAddProfilePhotoMutation} = api;