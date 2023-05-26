import React, { useEffect, useState } from "react";
import styles from "./usersForDialogs.module.scss";
import { useGetDialogsQuery } from "../../../Redux/ApiEndpoints/dialogsApi";
import UserDialog from "./UserDialog";
import { useDispatch } from "react-redux";
import { setHasMessage } from "../../../Redux/Slices/dialogsSlice";



const UsersForDialogs = () => {

  const {data} = useGetDialogsQuery()
  
  const dispatch = useDispatch()

  useEffect(() => {
    if (data && data.length > 0) {
      const hasNewMessages = data.some(dialog => dialog.hasNewMessages);
      dispatch(setHasMessage(hasNewMessages));
    } else {
      dispatch(setHasMessage(false));
    }
  }, [data , dispatch]);


  return (
    <div className={styles.usersForDialogs}>
      {data && data.map(userDialog => <UserDialog key = {userDialog.id}
      userId = {userDialog.id}
      name={userDialog.userName}
      photo={userDialog.photos.small}
      messageIndicator = {userDialog.hasNewMessages}
      messageCount = {userDialog.newMessagesCount}/>)}
    </div>
  );
}

export default UsersForDialogs;