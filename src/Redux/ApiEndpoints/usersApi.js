import {api} from "./../api"

const usersApi = api.injectEndpoints({
  endpoints: (build) => ({
    getUsers:build.query({
      query:(params) =>{
        const {webPage,userNameValue} = params
        return{
          url:`/users?page=${webPage}&term=${userNameValue}`, 
        }
      },
      providesTags: () => [{type: "users", id: "LIST"}],
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
      }
    }), 

    unFollowUser:build.mutation({
      query:(userId) => {
        return {
          url: `/follow/${userId}`,
          method: 'DELETE',
        };
      }
    }), 

  }),
  overrideExisting: false,
})

export const {useGetUsersQuery , useGetFollowStatusQuery , useFollowUserMutation , useUnFollowUserMutation} = usersApi