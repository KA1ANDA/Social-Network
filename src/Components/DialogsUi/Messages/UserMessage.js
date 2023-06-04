import React, { useEffect, useState } from "react";
import styles from "./userMessage.module.scss";
import { useSelector } from "react-redux";
import {BsCheckAll} from "react-icons/bs"




const UserMessage = ({senderName , messageBody , time , seen , recipientId ,senderId }) => {

  const [viewed ,setViewed] = useState(false)

  const {myId} = useSelector(state => state.authSlice)
  const {clickedUserPhoto} = useSelector(state => state.dialogsSlice)
  const {profilePhoto} = useSelector(state => state.profileSlice)

  


  useEffect(() => {
    if (seen){
      setViewed(true)
    }
  }, [seen]);

  const messageStyle =
  recipientId === myId ? styles.myMessage : styles.userMessage;
  

  const date = new Date(time);
  const timeOptions = { hour: 'numeric', minute: 'numeric' };
  const formattedTime = date.toLocaleTimeString('ge-GE', timeOptions);

  const formattedDate = date.toLocaleDateString('ge-GE', { month: 'short', day: 'numeric' });
  
  
  return (
    <div>

      {recipientId === myId ? 
      <div className={styles.wrapper}>
        <div className={styles.avatar}>
          <img src={clickedUserPhoto}/>
        </div>
        <div className={messageStyle}>
          <div className={styles.messageBody}>{messageBody}</div>
          <div className={styles.messageInfo}>
            <div>{formattedDate} , {formattedTime} {viewed && <BsCheckAll/>} </div>
          </div>
        </div>
      </div> : 
      
      <div className={styles.wrapper}> 
        <div className={messageStyle}>
          <div className={styles.messageBody}>{messageBody}</div>
          <div className={styles.messageInfo}>
            <div>{formattedDate} , {formattedTime} {viewed && <BsCheckAll/>} </div>
          </div>
        </div>
        <div className={styles.avatar}>
          <img src={profilePhoto}/>
        </div>
      </div>}
    </div>


  );
}

export default UserMessage;