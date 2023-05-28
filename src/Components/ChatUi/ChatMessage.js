import React from "react";
import styles from "./chatMessage.module.scss";




const ChatMessage = ({photo , userName ,message}) => {


  return (
    <div className={styles.chatMessage}>
      <div>
      <img src={photo} />
      </div>
      <div>
        <h2>{userName}</h2>
      </div>
      <div>
        <h2>{message}</h2>
      </div>
    </div>
  );
}

export default ChatMessage;