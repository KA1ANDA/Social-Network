import React, { useState } from "react";
import styles from "./mainInfo.module.scss"
import { useDispatch, useSelector } from "react-redux";
import User from "../../UserUi/User";
import StatusArea from "../../postsUI/StatusArea";
import SocialMediaLinks from "../../../CommonComponents/SocialMediaLinks";
import SearchingForJob from "./SearchingForJob";
import {TiEdit} from "react-icons/ti"
import AddStatus from "../../postsUI/AddStatus/AddStatus";
import { setEditStatus, toggleEditMode } from "../../../../Redux/Slices/profileSlice";

import {AiFillEdit} from "react-icons/ai"

const MainInfo = () => {

  const dispatch = useDispatch()
 
  const {socialMedia , editStatus} = useSelector(state => state.profileSlice)
  const {myId , userId} = useSelector(state => state.authSlice)


  const changeStatus = () => dispatch(setEditStatus(!editStatus))
  const editMode = () => dispatch(toggleEditMode())


  return (
    <div className={styles.mainInfo}>
        <div className={styles.editBtnWrapper}>
          <div className={myId === userId ? styles.editMode : styles.clearObject} onClick={editMode}>
             <AiFillEdit/>
          </div>
        </div>
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
            <div className={myId === userId ? styles.edit : styles.clearObject}onClick={changeStatus}>
              <TiEdit />
            </div>
          </div>
            <div className={styles.statusWrapper}>
              <div>
                <StatusArea />
              </div>
              {myId === userId && (
                <div>
                  <AddStatus />
                </div>
              )}
             
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