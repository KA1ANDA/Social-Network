import {api} from "./../api"

const dialogsApi = api.injectEndpoints({
  endpoints: (build) => ({

    getDialogs:build.query({
      query: () => '/dialogs',
      providesTags: () => ['dialogs'],
      async onCacheEntryAdded(
        arg,
        { updateCachedData, cacheDataLoaded, cacheEntryRemoved }
      ) {
        
        const ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
        try {
          
          await cacheDataLoaded

        
          const listener = (event) => {
            const data = JSON.parse(event.data)
            // console.log(data)
            return updateCachedData((result) => {
              result.push(data)
            })
          
          }

          ws.addEventListener('message', listener)
        } catch {
          // no-op in case `cacheEntryRemoved` resolves before `cacheDataLoaded`,
          // in which case `cacheDataLoaded` will throw
        }
        // cacheEntryRemoved will resolve when the cache subscription is no longer active
        await cacheEntryRemoved
        // perform cleanup steps once the `cacheEntryRemoved` promise resolves
        ws.close()
      },
    }),

    getMessage:build.query({
      query: (id) => `dialogs/${id}/messages`,
      providesTags: () => ['messages'],
    }),

    sendMessage:build.mutation({
      query: (params) => {
        const {id , message} = params
        return {
          url:`dialogs/${id}/messages`,
          method:'POST',
          body:message,
        }
      },
      invalidatesTags: ['messages'],
    })
  
  }),
  overrideExisting: false,
  
})

export const {useGetDialogsQuery ,useGetMessageQuery , useSendMessageMutation} = dialogsApi