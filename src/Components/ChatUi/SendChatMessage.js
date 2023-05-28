import React, { useState } from "react";
import styles from "./sendChatMessage.module.scss";







const SendChatMessage = () => {

  const [messageValue , setMessageValue] = useState('')


  const handleMessageValue = (event) => {
    setMessageValue(event.target.value)
  }

  return (
    <div className={styles.sendChatMessage}>
      <input onChange = {handleMessageValue} value = {messageValue}></input>
      <button>Send</button>
    </div>
  );
}

export default SendChatMessage;