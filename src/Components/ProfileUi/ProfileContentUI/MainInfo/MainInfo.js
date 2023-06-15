import React from "react";
import styles from "./mainInfo.module.scss"

import { useSelector } from "react-redux";
import User from "../../UserUi/User";
import StatusArea from "../../postsUI/StatusArea";
import SocialMediaLinks from "../../../CommonComponents/SocialMediaLinks";

const MainInfo = () => {

  const {socialMedia} = useSelector(state => state.profileSlice)

  return (
    <div className={styles.mainInfo}>
        <div>
          <User />
        </div>
        <div className={styles.statusArea}>
          <div className={styles.statusTitle}>My status :</div>
          <StatusArea />
        </div>
        <div className={styles.socialMediaWrapper}> 
          <div className={styles.socialMediaLinks}> 
            <SocialMediaLinks contacts={socialMedia}/>
          </div>
        </div>
    </div>     
  );
}

export default MainInfo;