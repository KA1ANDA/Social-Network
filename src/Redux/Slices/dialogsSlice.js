import { createSlice } from "@reduxjs/toolkit";



const dialogsSlice = createSlice({
  name: "dialogsSlice",
  initialState: {
   clickedUserId:null,
   clickedUserPhoto:'',
   clickedUserUserName:'',
   hasMessage:false,
   users:[],
   searchedUsers:[],
  },
  reducers: {
   setClickedUserMessages(state,action){
    state.clickedUserId = action.payload
   },
   setClickedUserPhoto(state,action){
    state.clickedUserPhoto = action.payload
   },
   setClickedUserUserName(state,action){
    state.clickedUserUserName = action.payload
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

export const {setClickedUserMessages , setHasMessage , setUsers , searchUsers ,setClickedUserPhoto ,setClickedUserUserName} = dialogsSlice.actions;
export default dialogsSlice.reducer;