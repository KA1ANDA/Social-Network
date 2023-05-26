import React, { useEffect, useState } from "react";
import styles from "./sendMessage.module.scss";
import { useSelector } from "react-redux";
import { useSendMessageMutation } from "../../../Redux/ApiEndpoints/dialogsApi";






const SendMessage = () => {

  const [messageValue , setMessageValue] = useState('')
  const [sendMessage, data ] = useSendMessageMutation()
  const {clickedUserId} = useSelector(state => state.dialogsSlice)



  

  const handleMessageValue = (event) => {
    setMessageValue(event.target.value)
  }

  const handleSendMessageValue = () => {
    const params = {
      userId:clickedUserId,
      message:messageValue,
    }

    sendMessage(params)
  }


  return (
    <div className={styles.sendMessage}>
      <input onChange = {handleMessageValue} value = {messageValue}></input>
      <button onClick={handleSendMessageValue}>Send</button>
    </div>
  );
}

export default SendMessage;