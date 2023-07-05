import React, { useEffect, useState } from "react";
import styles from "./usersForDialogs.module.scss";
import { useGetDialogsQuery, useGetMessageQuery } from "../../../Redux/ApiEndpoints/dialogsApi";
import UserDialog from "./UserDialog";
import { useDispatch, useSelector } from "react-redux";
import { setHasMessage, setUsers } from "../../../Redux/Slices/dialogsSlice";



const UsersForDialogs = () => {
  const dispatch = useDispatch()
  const {users , searchedUsers} = useSelector(state => state.dialogsSlice)
  const {data , refetch} = useGetDialogsQuery()
  const {clickedUserId} = useSelector(state => state.dialogsSlice)

  


  useEffect(() => {
    if (data && data.length > 0) {
      dispatch(setUsers(data))

      const hasNewMessages = data.some(dialog => dialog.hasNewMessages);
      dispatch(setHasMessage(hasNewMessages));
    } else {
      dispatch(setHasMessage(false));
    }
  }, [data , dispatch]);



  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     refetch();
  //   }, 3000); // Polling interval: every 5 seconds

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);


  return (
    <div className={styles.usersForDialogs}>
      <div className={styles.wraper}>
        {searchedUsers.length > 0 ? searchedUsers.map(userDialog => <UserDialog key = {userDialog.id}
        userId = {userDialog.id}
        name={userDialog.userName}
        photo={userDialog.photos.small}
        messageIndicator = {userDialog.hasNewMessages}
        messageCount = {userDialog.newMessagesCount}
        isClicked={userDialog.id===clickedUserId}
        lastUserActivityDate={userDialog.lastUserActivityDate}/>) :  <div className={styles.noInformation}>No Dialogs Found</div>}
      </div>  
    </div>
  );
}

export default UsersForDialogs;