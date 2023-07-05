import {api} from "./../api"

const usersApi = api.injectEndpoints({
  endpoints: (build) => ({

    
    getUsers:build.query({
      query:(params) =>{
        const {webPage,userNameValue} = params
        return{
          url:`/users?page=${webPage}&term=${userNameValue}&count=8`, 
        }
      },
      providesTags: () => [{type: "users", id: "LIST"}],
    }), 


    getFollowedUsers:build.query({
      query:() => `/users?count=100`,  
      providesTags: () => ['users'],
    }), 

    getFollowStatus:build.query({
      query:(userId) => `/follow/${userId}`,  
      providesTags: () => ['users'],
    }), 

    followUser:build.mutation({
      query:(userId) => {
        return {
          url: `/follow/${userId}`,
          method: 'POST',
        };
      },
      invalidatesTags: ['users'],
    }), 

    unFollowUser:build.mutation({
      query:(userId) => {
        return {
          url: `/follow/${userId}`,
          method: 'DELETE',
        };
      },
      invalidatesTags: ['users'],
    }), 

  }),
  overrideExisting: false,
})

export const {useGetUsersQuery , useGetFollowStatusQuery , useFollowUserMutation , useUnFollowUserMutation ,useGetFollowedUsersQuery} = usersApi