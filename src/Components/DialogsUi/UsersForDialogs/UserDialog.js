import React, { useEffect, useState } from "react";
import styles from "./userDialog.module.scss";
import { useGetMessageQuery } from "../../../Redux/ApiEndpoints/dialogsApi";
import { useDispatch } from "react-redux";
import { setClickedUserMessages, setClickedUserPhoto, setClickedUserUserName } from "../../../Redux/Slices/dialogsSlice";



const UserDialog = ({name , photo , messageIndicator , messageCount , userId, isClicked , lastUserActivityDate}) => {

  const dispatch = useDispatch()

  const clickedUserMessages = () => {
    dispatch(setClickedUserMessages(userId));
    dispatch(setClickedUserPhoto(photo));
    dispatch(setClickedUserUserName(name));

    };

  const [newMessageIndicator , setNewMessageIndicator] = useState(false)

  useEffect(() => {
    if (messageIndicator){
      setNewMessageIndicator(true)
    }
  }, [messageIndicator]);

  const date = new Date(lastUserActivityDate);

  const timeOptions = { hour: 'numeric', minute: 'numeric' };
  const formattedTime = date.toLocaleTimeString('ge-GE', timeOptions);

  const formattedDate = date.toLocaleDateString('ge-GE', { month: 'short', day: 'numeric' });



  return (
    <div className={`${isClicked && styles.active} ${styles.userDialog}`} onClick={clickedUserMessages} >
      <div className={styles.wraper}>
        <div className={styles.userInfo}>
          <div className={styles.userPhoto}>
            <img src={photo} className={`${!photo && styles.default}`}/>
          </div>
          <div className={styles.userName}>
            <h3>{name}</h3>
          </div> 
        </div>

        <div className={styles.lastActivity}>
          <p>Active : {formattedDate} , {formattedTime}</p>
        </div>  
      </div>
        {/* {newMessageIndicator && <div className={styles.newMessageIndicator}>{messageCount}</div> } */}
    </div>
  );
}

export default UserDialog;