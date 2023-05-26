import { createSlice } from "@reduxjs/toolkit";

const dialogsSlice = createSlice({
  name: "dialogsSlice",
  initialState: {
   clickedUserId:null,
   hasMessage:false,
  },
  reducers: {
   setClickedUserMessages(state,action){
    state.clickedUserId = action.payload
   },
   setHasMessage(state,action){
    state.hasMessage = action.payload
   },
  },
});

export const {setClickedUserMessages , setHasMessage } = dialogsSlice.actions;
export default dialogsSlice.reducer;