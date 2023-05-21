import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api";
import profileSlice from "./Slices/profileSlice";
import authSlice from "./Slices/authSlice";




export const store = configureStore({
  reducer:{
    profileSlice,
    authSlice,
    [api.reducerPath]:api.reducer,
    
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})