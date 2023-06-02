import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api";
import profileSlice from "./Slices/profileSlice";
import authSlice from "./Slices/authSlice";
import dialogsSlice from "./Slices/dialogsSlice";
import chatSlice from "./Slices/chatSlice";
import headerSlice from "./Slices/headerSlice";







export const store = configureStore({
  reducer:{
    profileSlice,
    authSlice,
    dialogsSlice,
    chatSlice,
    headerSlice,
    [api.reducerPath]:api.reducer,
    
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})