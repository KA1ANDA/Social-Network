import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "authSlice",
  initialState: {
    myId: null,
    userId:null,
    authorised:false,
    error: null,
    userName:'',
    email:'',
  },
  reducers: {
    setUserId: (state, action) => {
      state.userId = action.payload;
    },
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
    setUserName: (state, action) => {
      state.userName = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setAuthorised: (state, action) => {
      state.authorised = action.payload;
    },
  },
});

export const { loginSuccess, loginFailure , setUserId , logOutSuccess, setUserName , setEmail , setAuthorised} = authSlice.actions;
export default authSlice.reducer;