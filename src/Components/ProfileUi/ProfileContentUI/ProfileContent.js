import React from "react";
import styles from "./profileContent.module.scss"
import StatusArea from "../postsUI/StatusArea";
import AboutMe from "../AboutMeUi/AboutMe";
import User from "../UserUi/User";
import SocialMediaLinks from "../../CommonComponents/SocialMediaLinks";
import { useDispatch, useSelector } from "react-redux";
import MainInfo from "./MainInfo/MainInfo";
import { toggleEditMode } from "../../../Redux/Slices/profileSlice";

const ProfileContent = () => {
  

  const {socialMedia ,editMode} = useSelector(state => state.profileSlice)

  return (
    <div className={styles.profileContent}>
      <MainInfo />

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