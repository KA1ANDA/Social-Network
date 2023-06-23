import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


const BASE_URL ="https://social-network.samuraijs.com/api/1.0";
const API_KEY ="12e4a4c0-c96d-415d-a450-5f77e51b0610";



export const api = createApi({
  reducerPath:"api",
  tagTypes:["userInfo","login","status","profileInfo","profilePhoto","users","dialogs","messages","chat","followedUsers"],
  baseQuery:fetchBaseQuery({
    baseUrl:BASE_URL,
    headers: {
      'API-KEY': API_KEY,
      // 'Content-Type':'application/json',
    },
    credentials: 'include',

  }),
  endpoints:(build) => ({

    getUserInfo:build.query({
      query:() => 'auth/me',  
      providesTags: () => ['login'],
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
      query : (id) => `profile/${id}`,
      providesTags: () => ['profileInfo'], //sheidzleba aq damjirdes tegis damateba
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




    logIn: build.mutation({
      query(params) {
        const {email,password,rememberMe} = params
        return {
          url: `auth/login`,
          method: 'POST',
          body:{
            email,
            password,
            rememberMe
          },
        }
      },
      invalidatesTags: ['login'],
    }),


    logOut: build.mutation({
      query() {  
        return {
          url: `auth/logout`,
          method: 'POST',
        }
      },
      invalidatesTags: ['login'],
    }),


    

    
  })
});


export const {
  useAddStatusMutation,
  useGetUserStatusQuery,
  useGetUserInfoQuery,
  useAddProfileInfoMutation,
  useGetProfileInfoQuery,
  useAddProfilePhotoMutation,
  useLogInMutation,
  useLogOutMutation} = api;