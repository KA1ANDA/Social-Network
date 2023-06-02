import React, { useEffect, useState } from "react";
import styles from "./userDialog.module.scss";
import { useGetMessageQuery } from "../../../Redux/ApiEndpoints/dialogsApi";
import { useDispatch } from "react-redux";
import { setClickedUserMessages } from "../../../Redux/Slices/dialogsSlice";



const UserDialog = ({name , photo , messageIndicator , messageCount , userId, isClicked}) => {

  const dispatch = useDispatch()

  const clickedUserMessages = () => dispatch(setClickedUserMessages(userId))

  const [newMessageIndicator , setNewMessageIndicator] = useState(false)

  useEffect(() => {
    if (messageIndicator){
      setNewMessageIndicator(true)
    }
  }, [messageIndicator]);

 
  return (
    <div className={`${isClicked && styles.active} ${styles.userDialog}`} onClick={clickedUserMessages} >
      <div className={styles.wraper}>
        <div className={styles.userInfo}>
          <div className={styles.userPhoto}>
            <img src={photo}/>
          </div>
          <div className={styles.userName}>
            <h3>{name}</h3>
          </div> 
        </div>

        <div className={styles.lastMessage}>
          <p>texti unda iyos aq</p>
        </div>  
      </div>
        {/* {newMessageIndicator && <div className={styles.newMessageIndicator}>{messageCount}</div> } */}
    </div>
  );
}

export default UserDialog;