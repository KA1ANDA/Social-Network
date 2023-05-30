import React from "react";
import styles from "./chatContent.module.scss"
import SendChatMessage from "./SendChatMessage";
import ChatArea from "./ChatArea";

const ChatContent = () => {
  return (
    <div className={styles.chatContent}>
      <ChatArea />
    </div>
  );
}

export default ChatContent;