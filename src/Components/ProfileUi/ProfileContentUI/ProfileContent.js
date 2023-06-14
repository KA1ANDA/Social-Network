import React from "react";
import styles from "./profileContent.module.scss"
import StatusArea from "../postsUI/StatusArea";
import AboutMe from "../AboutMeUi/AboutMe";
import User from "../UserUi/User";
import SocialMediaLinks from "../../CommonComponents/SocialMediaLinks";
import { useSelector } from "react-redux";

const ProfileContent = () => {

  const {socialMedia} = useSelector(state => state.profileSlice)

  return (
    <div className={styles.profileContent}>
      <div className={styles.mainInfo}>
        <div>
          <User />
        </div>
        <div className={styles.statusArea}>
          <div className={styles.statusTitle}>My status :</div>
          <StatusArea />
        </div>
        <div>
          <SocialMediaLinks contacts={socialMedia}/>
        </div>
      </div>

      <div className={styles.info}>
        <AboutMe />
      </div>

      <div className={styles.followedUsers}>
        followedUsers
      </div>
      
    </div>
  );
}

export default ProfileContent;