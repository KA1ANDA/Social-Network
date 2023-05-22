import React from "react";
import styles from "./usersForDialogs.module.scss";
import { useGetDialogsQuery } from "../../../Redux/ApiEndpoints/dialogsApi";
import UserDialog from "./UserDialog";



const UsersForDialogs = () => {

  const {data} = useGetDialogsQuery()

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