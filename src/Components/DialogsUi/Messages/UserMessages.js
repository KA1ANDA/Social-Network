import React, { useEffect } from "react";
import styles from "./userMessages.module.scss";
import { useGetMessageQuery } from "../../../Redux/ApiEndpoints/dialogsApi";
import UserMessage from "./UserMessage";
import { useSelector } from "react-redux";
import SendMessage from "./SendMessage";




const UserMessages = () => {

  const {clickedUserId} = useSelector(state => state.dialogsSlice)

  const {data , refetch} = useGetMessageQuery(clickedUserId)
  

  useEffect(() => {
    if (data){
      refetch()
      console.log(data) ///AMAN GAVLENA MOAXDINA UNDA VCADO API DONEZE DASMA AMIS !!!!!!!!!
    }
  }, [data]);


  return (
    <div className={styles.userMessages}>
      <div>
      {data && data.items.map(userMessage => <UserMessage key={userMessage.id}
       messageBody = {userMessage.body}
       time = {userMessage.addedAt}
       senderName = {userMessage.senderName}
       seen = {userMessage.viewed}/>)}
      </div>
      <div>
        <SendMessage />
      </div>
    </div>
  );
}

export default UserMessages;