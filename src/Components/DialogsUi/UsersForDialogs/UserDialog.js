import React, { useEffect, useState } from "react";
import styles from "./userDialog.module.scss";
import { useGetDialogsQuery, useGetMessageQuery } from "../../../Redux/ApiEndpoints/dialogsApi";
import { useDispatch, useSelector } from "react-redux";
import { setClickedUserMessages, setClickedUserPhoto, setClickedUserUserName } from "../../../Redux/Slices/dialogsSlice";



const UserDialog = ({name , photo , messageIndicator , messageCount , userId, isClicked , lastUserActivityDate}) => {

  const dispatch = useDispatch()

  const {users} = useSelector(state => state.dialogsSlice)

  const clickedUserMessages = () => {
    dispatch(setClickedUserMessages(userId));
    dispatch(setClickedUserPhoto(photo));
    dispatch(setClickedUserUserName(name));

    };

    

  useEffect(() => {
    dispatch(setClickedUserMessages(users[0].id));
    dispatch(setClickedUserPhoto(users[0].photos.small));
    dispatch(setClickedUserUserName(users[0].userName));
  }, [users , dispatch]);


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
        {/* {messageIndicator && <div className={styles.newMessageIndicator}>kuku</div> } */}
    </div>
  );
}

export default UserDialog;