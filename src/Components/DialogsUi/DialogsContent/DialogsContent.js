import React from "react";
import styles from "./DialogsContent.module.scss"
import UsersForDialogs from "../UsersForDialogs/UsersForDialogs";
import UserMessages from "../Messages/UserMessages";
import SearchDialogs from "../DialogSearch/SearchDialog";


const DialogsContent = () => {
  return (
    <div className={styles.DialogsContent}>
      <div className={styles.search}>
        <SearchDialogs />
      </div>
      <div className={styles.users}>
      <UsersForDialogs />
      </div>
      <div className={styles.userName}>
        <h2>user photo</h2>
        <h2>user name</h2>
      </div>
      <div className={styles.dialog}>
        <UserMessages />
      </div>
      <div className={styles.profileInfo}>
        <h2>PROFILE INFO</h2>
      </div>
    </div>
  );
}

export default DialogsContent;