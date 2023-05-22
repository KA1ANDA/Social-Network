import { createSlice } from "@reduxjs/toolkit";

const dialogsSlice = createSlice({
  name: "dialogsSlice",
  initialState: {
   clickedUserId:null,
  },
  reducers: {
   setClickedUserMessages(state,action){
    state.clickedUserId = action.payload
   },
  },
});

export const {setClickedUserMessages } = dialogsSlice.actions;
export default dialogsSlice.reducer;