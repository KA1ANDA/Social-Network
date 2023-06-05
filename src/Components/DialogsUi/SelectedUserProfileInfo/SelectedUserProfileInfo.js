import React from "react";
import styles from "./selectedUserProfileInfo.module.scss";
import { useGetProfileInfoQuery } from "../../../Redux/api";
import { useSelector } from "react-redux";



const SelectedUserProfileInfo = () => {

const {clickedUserId , clickedUserUserName} = useSelector(state => state.dialogsSlice)
const {data} = useGetProfileInfoQuery(clickedUserId)

  return (
    <div className={styles.selectedUser}>
      {data &&
      <div className={styles.wrapper}>
        <div>
          <div className={styles.photo}>
            <img src={data.photos.large}/>
          </div>
          <div className={styles.name}>
            <h2>{clickedUserUserName}</h2>
          </div>
          <div className={styles.aboutMe}>
            <h4>{data.aboutMe}</h4>
          </div>
        </div>   
        <div className={styles.jobDescription}>
          {data.lookingForAJobDescription}
        </div>
        <div className={styles.socialNetworks}>
          Social networks
        </div>
       </div> 
      }   
    </div>
  );
}

export default SelectedUserProfileInfo;