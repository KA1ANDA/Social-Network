import React from "react";
import styles from "./chatArea.module.scss";
import { useGetChatMessagesQuery } from "../../Redux/ApiEndpoints/chatApi";
import ChatMessage from "./ChatMessage";





const ChatArea = () => {

  const {data} = useGetChatMessagesQuery()
  console.log(data)
  
  return (
    <div className={styles.chatArea}>
      <div>
      {data && data.map((chatMessage , index) => <ChatMessage key={index}
      message = {chatMessage.message}
      photo = {chatMessage.photo}
      username = {chatMessage.userName} />)}
      </div>
    </div>
  );
}

export default ChatArea;