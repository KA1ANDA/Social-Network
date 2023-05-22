import React from "react";
import styles from "./DialogsContent.module.scss"
import UsersForDialogs from "../UsersForDialogs/UsersForDialogs";
import UserMessages from "../Messages/UserMessages";


const DialogsContent = () => {
  return (
    <div className={styles.DialogsContent}>
      <UsersForDialogs />
      <UserMessages />
    </div>
  );
}

export default DialogsContent;