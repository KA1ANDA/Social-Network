import React from "react";
import styles from "./selectedUser.module.scss";
import { useSelector } from "react-redux";
import {BsThreeDotsVertical} from "react-icons/bs"


const SelectedUser = () => {
  const {clickedUserPhoto,clickedUserUserName} = useSelector(state => state.dialogsSlice)
  return (
    <div className={styles.selectedUser}>    
      <div className={styles.userPhoto} >
        <img src={clickedUserPhoto} className={`${!clickedUserPhoto && styles.default}`}/>
      </div>
      <div className={styles.userName}>
        <h2>{clickedUserUserName}</h2>
      </div>
      <div className={styles.settings}>
        <BsThreeDotsVertical />
      </div> 
    </div>
  );
}

export default SelectedUser;