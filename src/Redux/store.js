import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api";
import profileSlice from "./Slices/profileSlice";



export const store = configureStore({
  reducer:{
    [api.reducerPath]:api.reducer,
    profileSlice,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})