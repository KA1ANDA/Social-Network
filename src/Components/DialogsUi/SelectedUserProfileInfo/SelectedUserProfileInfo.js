import React from "react";
import styles from "./selectedUserProfileInfo.module.scss";
import { useGetProfileInfoQuery } from "../../../Redux/api";
import { useSelector } from "react-redux";

import {FaFacebook} from "react-icons/fa";
import {AiFillTwitterCircle} from "react-icons/ai";
import {AiOutlineInstagram} from "react-icons/ai";
import {AiFillPlayCircle} from "react-icons/ai";
import {AiFillGithub} from "react-icons/ai";










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
          {data.lookingForAJobDescription ? <h4>{data.lookingForAJobDescription}</h4> : <h4>Description is Empty</h4>}
        </div>
        <div className={styles.socialNetworks}>
          {Object.values(data.contacts).every((value) => value === "" || value === null) ?
              <div>
              No Social Media Linked
              </div>
              :
            <ul>
              {data.contacts.facebook &&  <li className={styles.fa}><a href={data.contacts.facebook} target="_blank"><FaFacebook/></a></li> }
              {data.contacts.twitter &&  <li className={styles.tw}><a href={data.contacts.twitter} target="_blank"><AiFillTwitterCircle/></a></li> }
              {data.contacts.instagram &&  <li className={styles.ins}><a href={data.contacts.instagram} target="_blank"><AiOutlineInstagram/></a></li>}
              {data.contacts.youtube &&  <li className={styles.yo}><a href={data.contacts.youtube} target="_blank"><AiFillPlayCircle/></a></li> }
              {data.contacts.github &&   <li className={styles.git}><a href={data.contacts.github} target="_blank"><AiFillGithub/></a></li> }
            </ul>
          }
        </div>
       </div> 
      }   
    </div>
  );
}

export default SelectedUserProfileInfo;