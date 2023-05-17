import {api} from "./../api"

const usersApi = api.injectEndpoints({
  endpoints: (build) => ({
    getUsers:build.query({
      query:() => '/users?count=10',  
      providesTags: () => [{type: "users", id: "LIST"}],
      // providesTags: () => ['users'],
    }), 
  }),
  overrideExisting: false,
})

export const {useGetUsersQuery} = usersApi