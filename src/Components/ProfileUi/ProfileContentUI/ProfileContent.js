import React from "react";
import styles from "./profileContent.module.scss"
import StatusArea from "../postsUI/StatusArea";
import AboutMe from "../AboutMeUi/AboutMe";
import User from "../UserUi/User";
import SocialMediaLinks from "../../CommonComponents/SocialMediaLinks";
import { useDispatch, useSelector } from "react-redux";
import MainInfo from "./MainInfo/MainInfo";
import { toggleEditMode } from "../../../Redux/Slices/profileSlice";
import Subscribers from "./Subscribers/Subscribers";
import { useGetProfileInfoQuery } from "../../../Redux/api";

const ProfileContent = () => {
  

  const {socialMedia ,editMode} = useSelector(state => state.profileSlice)
  const {data, isLoading, isError} = useGetProfileInfoQuery()

  

  return (
    <div className={styles.profileContent}>
      <MainInfo />

      <div className={styles.info}>
        <AboutMe />
      </div>

      <div className={styles.followedUsers}>
        <Subscribers />
      </div>

    
    </div>
  );
}

export default ProfileContent;