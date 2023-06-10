import React from "react";
import styles from "./chatContent.module.scss"
import SendChatMessage from "./SendChatMessage";
import ChatArea from "./ChatArea";
import ChatUsers from "./ChatUsersDisplay/ChatUsers";

const ChatContent = () => {
  return (
    <div className={styles.chatContent}>
      <div className={styles.chatWrapper}>
        <div className={styles.chatArea}>
          <ChatArea />
        </div>

        <div className={styles.chatUsers}>
          <ChatUsers />
        </div>
      </div>
    </div>
  );
}

export default ChatContent;