import React, { useEffect, useState } from "react";
import styles from "./sendMessage.module.scss";
import { useSelector } from "react-redux";
import { useSendMessageMutation } from "../../../Redux/ApiEndpoints/dialogsApi";
import {LuSend} from "react-icons/lu"






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
    setMessageValue('')
  }


  return (
    <div className={styles.sendMessage}>
      <input placeholder="Write a message..." onChange = {handleMessageValue} value = {messageValue}></input>
      <button onClick={handleSendMessageValue}><LuSend/></button>
    </div>
  );
}

export default SendMessage;