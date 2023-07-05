import React, { useEffect, useRef } from "react";
import styles from "./userMessages.module.scss";
import { useGetMessageQuery } from "../../../Redux/ApiEndpoints/dialogsApi";
import UserMessage from "./UserMessage";
import { useDispatch, useSelector } from "react-redux";
import SendMessage from "./SendMessage";
import { setHasMessage } from "../../../Redux/Slices/dialogsSlice";
import Loader from "../../CommonComponents/Loader";




const UserMessages = () => {

  const dispatch = useDispatch()

  const {clickedUserId} = useSelector(state => state.dialogsSlice)

  const {data , refetch ,isLoading} = useGetMessageQuery(clickedUserId)
  

  // useEffect(() => {
  //     refetch();
  //     console.log('gavanaxle')
  // }, [data]);

  useEffect(() => {
    const interval = setInterval(() => {
      refetch();
    }, 3000); // Polling interval: every 5 seconds

    return () => {
      clearInterval(interval);
    };
  }, []);


  const chatContainerRef = useRef(null);

  useEffect(() => {
    scrollToBottom();
  }, [data]);

  const scrollToBottom = () => {
    chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
  };

 
  



  return (
    <div className={styles.userMessages}>
      <div  className={styles.message} ref={chatContainerRef}>
      {data && data.items.length>0 ? data.items.map(userMessage => <UserMessage key={userMessage.id}
       messageBody = {userMessage.body}
       time = {userMessage.addedAt}
       senderName = {userMessage.senderName}
       seen = {userMessage.viewed}
       recipientId = {userMessage.recipientId}
       senderId = {userMessage.senderId}
       />) : <div className={styles.noInformation}>No Messages Found</div>}
      </div>
      <div  className={styles.messageInput}>
        <SendMessage />
      </div>
    </div>
  );
}

export default UserMessages;