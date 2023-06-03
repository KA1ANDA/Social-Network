import { createSlice } from "@reduxjs/toolkit";



const dialogsSlice = createSlice({
  name: "dialogsSlice",
  initialState: {
   clickedUserId:null,
   hasMessage:false,
   users:[],
   searchedUsers:[],
  },
  reducers: {
   setClickedUserMessages(state,action){
    state.clickedUserId = action.payload
   },
   setHasMessage(state,action){
    state.hasMessage = action.payload
   },
   setUsers(state,action){
    state.users = action.payload
    state.searchedUsers = action.payload
   },
   searchUsers(state,action){
    const searchTerm = action.payload.toLowerCase();
    state.searchedUsers = state.users.filter(
      (dialog) => dialog.userName.toLowerCase().includes(searchTerm)
    );

   },
  },
});

export const {setClickedUserMessages , setHasMessage , setUsers , searchUsers} = dialogsSlice.actions;
export default dialogsSlice.reducer;