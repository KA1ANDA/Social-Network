import React, { useState } from "react";
import styles from "./mainInfo.module.scss"

import { useDispatch, useSelector } from "react-redux";
import User from "../../UserUi/User";
import StatusArea from "../../postsUI/StatusArea";
import SocialMediaLinks from "../../../CommonComponents/SocialMediaLinks";
import SearchingForJob from "./SearchingForJob";
import {TiEdit} from "react-icons/ti"
import AddStatus from "../../postsUI/AddStatus/AddStatus";
import { setEditStatus } from "../../../../Redux/Slices/profileSlice";

const MainInfo = () => {

  const dispatch = useDispatch()

  const {socialMedia , editStatus} = useSelector(state => state.profileSlice)

  const changeStatus = () => dispatch(setEditStatus(!editStatus))

  return (
    <div className={styles.mainInfo}>
        <div>
          <User />
        </div>
        <div>
          <SearchingForJob />
        </div>
        <div className={styles.statusArea}>
          <div className={styles.statusTitle}>
            <div>
              My status :
            </div>
            <div className={styles.edit} onClick={changeStatus}>
              <TiEdit />
            </div>
          </div>
            <div className={styles.statusWrapper}>
              <div>
                <StatusArea />
              </div>
              <div>
                <AddStatus />
              </div>
             
            </div>
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