import { createSlice } from "@reduxjs/toolkit";
import { initWebSocket, sendMessage } from "../chatWebSocket";

const chatSlice = createSlice({
  name: "chatSlice",
  initialState: {
    chatMessages:[],
  },
  reducers: {
   addChatMessages(state,action){
    state.chatMessages = [...state.chatMessages , ...action.payload]
   }
  },
});

export const {addChatMessages } = chatSlice.actions;
export default chatSlice.reducer;


