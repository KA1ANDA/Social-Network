import React, { useEffect, useState } from "react";
import styles from "./aboutMe.module.scss"
import { useAddProfileInfoMutation, useAddProfilePhotoMutation, useGetProfileInfoQuery, useGetUserInfoQuery } from "../../../Redux/api";
import { useDispatch, useSelector } from "react-redux";
import { addAboutMeValue, addJobDscValue, addNameValue, setSocialMediaValue, toggleSearchForJobs ,toggleEditProfile, toggleEditBio} from "../../../Redux/Slices/profileSlice";
import {AiFillEdit} from "react-icons/ai"




const AboutMe = () => {

  const {socialMedia } = useSelector(state => state.profileSlice)
  const {myId , userId} = useSelector(state => state.authSlice)




  const dispatch = useDispatch()


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
        <div className={styles.bio}>
          <h1 className={styles.title}> About Me </h1>
          <div  className={styles.textWrapper} >{data.aboutMe}</div>
        </div>


        <div className={styles.skills}>
          <h1>Skills</h1> 
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