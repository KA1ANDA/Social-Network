import React, { useEffect } from "react";
import styles from "./userMessages.module.scss";
import { useGetMessageQuery } from "../../../Redux/ApiEndpoints/dialogsApi";
import UserMessage from "./UserMessage";
import { useSelector } from "react-redux";




const UserMessages = () => {

  const {clickedUserId} = useSelector(state => state.dialogsSlice)

  const {data} = useGetMessageQuery(clickedUserId)

  return (
    <div className={styles.userMessages}>
      {data && data.items.map(userMessage => <UserMessage key={userMessage.id}
       messageBody = {userMessage.body}
       time = {userMessage.addedAt}
       senderName = {userMessage.senderName}
       seen = {userMessage.viewed}/>)}
    </div>
  );
}

export default UserMessages;