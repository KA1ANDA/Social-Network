import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "authSlice",
  initialState: {
    myId: null,
    error: null,
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.myId = action.payload;
      state.error = null;
    },
    logOutSuccess: (state, action) => {
      state.myId = action.payload;
    },
    loginFailure: (state, action) => {
      state.user = null;
      state.error = action.payload;
    },
  },
});

export const { loginSuccess, loginFailure , setMyId , logOutSuccess } = authSlice.actions;
export default authSlice.reducer;