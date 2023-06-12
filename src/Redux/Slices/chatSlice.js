import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chatSlice",
  initialState: {
    activeUsersInChat:[],
  },
  reducers: {
   setActiveUsers(state,action){
    state.activeUsersInChat = action.payload
   },
  },
});

export const {setActiveUsers} = chatSlice.actions;
export default chatSlice.reducer;


