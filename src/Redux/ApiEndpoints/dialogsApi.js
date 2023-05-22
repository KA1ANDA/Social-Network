import {api} from "./../api"

const dialogsApi = api.injectEndpoints({
  endpoints: (build) => ({

    getDialogs:build.query({
      query: () => '/dialogs',
      providesTags: () => ['dialogs']
    }),

    getMessage:build.query({
      query: (id) => `dialogs/${id}/messages`,
      providesTags: () => ['messages']
    })
  
  }),
  overrideExisting: false,
})

export const {useGetDialogsQuery ,useGetMessageQuery} = dialogsApi