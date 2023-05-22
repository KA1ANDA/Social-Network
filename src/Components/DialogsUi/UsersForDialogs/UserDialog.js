import React, { useEffect, useState } from "react";
import styles from "./userDialog.module.scss";
import { useGetMessageQuery } from "../../../Redux/ApiEndpoints/dialogsApi";
import { useDispatch } from "react-redux";
import { setClickedUserMessages } from "../../../Redux/Slices/dialogsSlice";



const UserDialog = ({name , photo , messageIndicator , messageCount , userId}) => {

  const dispatch = useDispatch()

  const clickedUserMessages = () => dispatch(setClickedUserMessages(userId))

  const [newMessageIndicator , setNewMessageIndicator] = useState(false)

  useEffect(() => {
    if (messageIndicator){
      setNewMessageIndicator(true)
    }
  }, [messageIndicator]);


 
  return (
    <div className={styles.userDialog} onClick={clickedUserMessages} >
      <div>
        <img src={photo}/>
        <h3>{name}</h3>
        {newMessageIndicator && <div className={styles.newMessageIndicator}>{messageCount}</div> }
      </div> 
    </div>
  );
}

export default UserDialog;