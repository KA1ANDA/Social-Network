import React, { useEffect, useState } from "react";
import styles from "./sendChatMessage.module.scss";







const SendChatMessage = ({wsChannel}) => {

  const [messageValue , setMessageValue] = useState('')
  const [readyStatus, setReadyStatus] = useState('pending');



  const handleMessageValue = (event) => {
    setMessageValue(event.target.value)
  }


  useEffect(() => {
    if(wsChannel){
      wsChannel.addEventListener('open' , () =>{
        setReadyStatus('ready')
      })
    }

  }, [wsChannel]); 

  const sendMessage = () => {
    if (!messageValue){
      return
    }

    if (wsChannel){
      wsChannel.send(messageValue)
      setMessageValue('')
    }
  }

  

  return (
    <div className={styles.sendChatMessage}>
      <input onChange = {handleMessageValue} value = {messageValue}></input>
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default SendChatMessage;