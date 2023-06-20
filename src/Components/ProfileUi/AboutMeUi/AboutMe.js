import React, { useEffect, useState } from "react";
import styles from "./aboutMe.module.scss"
import { useAddProfileInfoMutation, useAddProfilePhotoMutation, useGetProfileInfoQuery, useGetUserInfoQuery } from "../../../Redux/api";
import { useDispatch, useSelector } from "react-redux";
import { addAboutMeValue, addJobDscValue, addNameValue, setSocialMediaValue, toggleSearchForJobs ,toggleEditProfile, toggleEditBio} from "../../../Redux/Slices/profileSlice";
import AboutMeEdit from "./AboutMeEdit";
import {AiFillEdit} from "react-icons/ai"
import BioEdit from "./BioEdit/BioEdit";




const AboutMe = () => {

  const {socialMedia , editBio} = useSelector(state => state.profileSlice)
  const {myId , userId} = useSelector(state => state.authSlice)




  const dispatch = useDispatch()
  const setEditBio = () => dispatch(toggleEditBio())

  const {data, isLoading, isError} = useGetProfileInfoQuery(userId)

  useEffect(() => {
    if (data) {
      dispatch(setSocialMediaValue(data.contacts));
    }
  }, [data , dispatch]);
 

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error occurred while fetching data.</div>;
  }

  // if (editProfile) {
  //   return <AboutMeEdit />;
  // }

  return (
    <div className={styles.aboutMe}>
      {data && 
      <>
        <div className={` ${styles.bio} ${editBio && styles.editModeBio}`}>
          <h1 className={styles.title}>{editBio ? 'Write about your self' : 'About Me'} <span onClick={setEditBio}> <AiFillEdit /> </span> </h1>
          {editBio ?  <BioEdit />  : <div  className={styles.textWrapper} >{data.aboutMe}</div>} 
        </div>


        <div className={styles.skills}>
          <h1>Skills<span> <AiFillEdit /> </span> </h1> 
          <div  className={styles.textWrapper} >{data.lookingForAJobDescription}</div>
        </div>

      </>
      }

      {/* <div>
        <button onClick={setEditProfile}>Edit Profile</button>
      </div> */}
    </div>
  );
}

export default AboutMe;