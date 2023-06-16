import React from "react";
import styles from "./selectedUserProfileInfo.module.scss";
import { useGetProfileInfoQuery } from "../../../Redux/api";
import { useSelector } from "react-redux";

import {FaFacebook} from "react-icons/fa";
import {AiFillTwitterCircle} from "react-icons/ai";
import {AiOutlineInstagram} from "react-icons/ai";
import {AiFillPlayCircle} from "react-icons/ai";
import {AiFillGithub} from "react-icons/ai";
import SocialMediaLinks from "../../CommonComponents/SocialMediaLinks";










const SelectedUserProfileInfo = () => {

const {clickedUserId , clickedUserUserName} = useSelector(state => state.dialogsSlice)
const {data} = useGetProfileInfoQuery(clickedUserId)

  return (
    <div className={styles.selectedUser}>
      {data &&
      <div className={styles.wrapper}>
        <div>
          <div className={styles.photo}>
            <img src={data.photos.large} className={`${!data.photos.large && styles.default}`}/>
          </div>
          <div className={styles.name}>
            <h2>{clickedUserUserName}</h2>
          </div>
          <div className={styles.aboutMe}>
            {data.aboutMe ? <h4>{data.aboutMe}</h4> : <h4>About Me is Empty</h4>}
          </div>
        </div>   
        <div className={styles.jobDescription}>
          <div className={styles.jobDescTitle}>
            Skills :
          </div>
          {data.lookingForAJobDescription ? <h4>{data.lookingForAJobDescription}</h4> : <h4>Description is Empty</h4>}
        </div>
        <div className={styles.socialNetworks}>
          <SocialMediaLinks contacts={data.contacts}/>
        </div>
       </div> 
      }   
    </div>
  );
}

export default SelectedUserProfileInfo;