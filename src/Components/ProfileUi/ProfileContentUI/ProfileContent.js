import React from "react";
import styles from "./profileContent.module.scss"
import StatusArea from "../postsUI/StatusArea";
import AboutMe from "../AboutMeUi/AboutMe";
import User from "../UserUi/User";

const ProfileContent = () => {
  return (
    <div className={styles.profileContent}>
      <User />
      <StatusArea />
      <AboutMe />
    </div>
  );
}

export default ProfileContent;