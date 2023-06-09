import React from "react";
import styles from "./DialogsContent.module.scss"
import UsersForDialogs from "../UsersForDialogs/UsersForDialogs";
import UserMessages from "../Messages/UserMessages";
import SearchDialogs from "../DialogSearch/SearchDialog";
import SelectedUser from "../SelectedUserHeader/SelectedUser";
import SelectedUserProfileInfo from "../SelectedUserProfileInfo/SelectedUserProfileInfo";


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
        <SelectedUser />
      </div>
      <div className={styles.dialog}>
        <UserMessages />
      </div>
      <div className={styles.profileInfo}>
        <SelectedUserProfileInfo />
      </div>
    </div>
  );
}

export default DialogsContent;