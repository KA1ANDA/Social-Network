import React from "react";
import styles from "./chatMessage.module.scss";




const ChatMessage = ({photo , userName ,message}) => {


  return (
    <div className={styles.chatMessage}>
      <div className={styles.photoNameWrapper}>
        <div className={styles.photo}>
          <img src={photo} />
        </div>
        <div className={styles.name}>
          <h2>{userName}</h2>
        </div>
      </div>
      <div className={styles.message}>
        <h2>{message}</h2>
      </div>
    </div>
  );
}

export default ChatMessage;