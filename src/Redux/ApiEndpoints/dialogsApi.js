import {api} from "./../api"


const dialogsApi = api.injectEndpoints({
  
  endpoints: (build) => ({

    getDialogs:build.query({
      query: () => '/dialogs',
      providesTags: () => ['dialogs'],
    }),

    getMessage:build.query({
      query: (id) => `dialogs/${id}/messages`,
      providesTags: () => ['messages'],
    }),


    getTotalNewMessages:build.query({
      query: () => `dialogs/messages/new/count`,
      providesTags: () => ['messages'],
    }),
    

    sendMessage:build.mutation({
      query: (params) => {
        const {userId , message} = params
        console.log(message)
        return {
          url:`dialogs/${userId}/messages`,
          method:'POST',
          body:{
            body:message
          },
        }
        
        
      },
      invalidatesTags: ['messages'],
      
    }),

    startChat:build.mutation({
      query: (userId) => {
        return {
          url:`dialogs/${userId}`,
          method:'PUT',
        }
      },
      invalidatesTags: ['dialogs'],
      
    }),


  
  
  }),
  overrideExisting: false,
  
})

export const {useGetDialogsQuery ,useGetMessageQuery , useSendMessageMutation , useStartChatMutation , useGetTotalNewMessagesQuery} = dialogsApi