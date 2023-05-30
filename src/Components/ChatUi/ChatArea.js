import React, { useEffect, useMemo, useState } from "react";
import styles from "./chatArea.module.scss";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addChatMessages } from "../../Redux/Slices/chatSlice";
import SendChatMessage from "./SendChatMessage";
import { startWebSocket } from "../../Redux/chatWebSocket";





const ChatArea = () => {

  const [wsChannel , setWsChannel] = useState(null)
  


  const dispatch = useDispatch()
  // const {chatMessages } = useSelector(state => state.chatSlice)
  
  const [messages , setMessages] = useState([])
  

  useEffect(() => {

    let createWs = () =>{
      setWsChannel (new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx'))
    }

    createWs()

    // const newSocket = new WebSocket(
    //   "wss://social-network.samuraijs.com/handlers/ChatHandler.ashx");

    // newSocket.onopen = () => {
    //   console.log("WebSocket connected");
    //   setSocket(newSocket); 
    // };

    
    // newSocket.onmessage = (event) => {
    //   const message = JSON.parse(event.data);
    //   dispatch(addChatMessages(message))
    //   console.log(message);
    // };



  }, []); 


  useEffect(() => {
    if(wsChannel){
      wsChannel.addEventListener('close' , () =>{
        console.log('CLOSE WS')
      })
    }

  }, [wsChannel]); 



  useEffect(() => {
    if(wsChannel){
    wsChannel.addEventListener('message',(e)=>{
      let newMessages = JSON.parse(e.data)
      setMessages((prevMessages)=>[...prevMessages , ...newMessages])
    })}

  }, [wsChannel]); 






  // const sendMessage = (message) => {
  //   if (socket && socket.readyState === WebSocket.OPEN) {
  //     wsChannel.send(JSON.stringify(message));
  //   } else {
  //     console.log("WebSocket is still connecting. Message not sent.");
  //   }
  // };
  
  


  
  return (
    <div className={styles.chatArea}>
      <div>
      {messages.map((chatMessage , index) => <ChatMessage key={index}
      message = {chatMessage.message}
      photo = {chatMessage.photo}
      userName = {chatMessage.userName} />)}
      </div>

      <div>
        <SendChatMessage wsChannel={wsChannel} />
      </div>
    </div>
  );
}

export default ChatArea;