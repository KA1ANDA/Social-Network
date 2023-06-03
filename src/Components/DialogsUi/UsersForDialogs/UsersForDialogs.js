import React, { useEffect, useState } from "react";
import styles from "./usersForDialogs.module.scss";
import { useGetDialogsQuery, useGetMessageQuery } from "../../../Redux/ApiEndpoints/dialogsApi";
import UserDialog from "./UserDialog";
import { useDispatch, useSelector } from "react-redux";
import { setHasMessage, setUsers } from "../../../Redux/Slices/dialogsSlice";



const UsersForDialogs = () => {
  const dispatch = useDispatch()
  const {users , searchedUsers} = useSelector(state => state.dialogsSlice)
  const {data} = useGetDialogsQuery()
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


  return (
    <div className={styles.usersForDialogs}>
      <div className={styles.wraper}>
        {searchedUsers.map(userDialog => <UserDialog key = {userDialog.id}
        userId = {userDialog.id}
        name={userDialog.userName}
        photo={userDialog.photos.small}
        messageIndicator = {userDialog.hasNewMessages}
        messageCount = {userDialog.newMessagesCount}
        isClicked={userDialog.id===clickedUserId}
        lastUserActivityDate={userDialog.lastUserActivityDate}/>)}
      </div>  
    </div>
  );
}

export default UsersForDialogs;