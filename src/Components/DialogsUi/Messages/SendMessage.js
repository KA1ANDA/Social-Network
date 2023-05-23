import React, { useState } from "react";
import styles from "./sendMessage.module.scss";
import { useGetDialogsQuery, useSendMessageMutation } from "../../../Redux/ApiEndpoints/dialogsApi";
import { useSelector } from "react-redux";





const SendMessage = () => {

  const [sendMessage] = useSendMessageMutation()
  const {clickedUserId} = useSelector(state => state.dialogsSlice)

  const [messageValue , setMessageValue] = useState('')

  const params = {
    id:clickedUserId,
    message:messageValue,
  }


  const handleMessageValue = (event) => {
    setMessageValue(event.target.value)
  }

  const handleSendMessageValue = () => {
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