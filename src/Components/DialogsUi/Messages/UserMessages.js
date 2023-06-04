import React, { useEffect } from "react";
import styles from "./userMessages.module.scss";
import { useGetMessageQuery } from "../../../Redux/ApiEndpoints/dialogsApi";
import UserMessage from "./UserMessage";
import { useDispatch, useSelector } from "react-redux";
import SendMessage from "./SendMessage";
import { setHasMessage } from "../../../Redux/Slices/dialogsSlice";




const UserMessages = () => {

  const dispatch = useDispatch()

  const {clickedUserId} = useSelector(state => state.dialogsSlice)

  const {data , refetch} = useGetMessageQuery(clickedUserId)
  

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
  


  return (
    <div className={styles.userMessages}>
      <div  className={styles.message}>
      {data && data.items.map(userMessage => <UserMessage key={userMessage.id}
       messageBody = {userMessage.body}
       time = {userMessage.addedAt}
       senderName = {userMessage.senderName}
       seen = {userMessage.viewed}
       recipientId = {userMessage.recipientId}
       senderId = {userMessage.senderId}
       />)}
      </div>
      <div  className={styles.messageInput}>
        <SendMessage />
      </div>
    </div>
  );
}

export default UserMessages;