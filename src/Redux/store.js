import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api";
import profileSlice from "./Slices/profileSlice";



export const store = configureStore({
  reducer:{
    profileSlice,
    [api.reducerPath]:api.reducer,
    
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})