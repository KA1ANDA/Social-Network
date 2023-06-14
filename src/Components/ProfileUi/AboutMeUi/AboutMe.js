import React, { useEffect, useState } from "react";
import styles from "./aboutMe.module.scss"
import { useAddProfileInfoMutation, useAddProfilePhotoMutation, useGetProfileInfoQuery, useGetUserInfoQuery } from "../../../Redux/api";
import { useDispatch, useSelector } from "react-redux";
import { addAboutMeValue, addJobDscValue, addNameValue, setSocialMediaValue, toggleSearchForJobs ,toggleEditProfile} from "../../../Redux/Slices/profileSlice";
import AboutMeEdit from "./AboutMeEdit";




const AboutMe = () => {

  const {socialMedia , editProfile} = useSelector(state => state.profileSlice)
  const {myId , userId} = useSelector(state => state.authSlice)


  const dispatch = useDispatch()
  const setEditProfile = () => dispatch(toggleEditProfile())

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

  if (editProfile) {
    return <AboutMeEdit />;
  }

  return (
    <div className={styles.aboutMe}>
      {data && 
      <div>
        <div>{data.aboutMe}</div>
          <div>
            <div>Looking For A Job ?</div>
            {data.lookingForAJob ? <span>✔️</span> : <span>❌</span>}
          </div>
        <div>{data.lookingForAJobDescription}</div>
      </div>
      }

      <div>
        <button onClick={setEditProfile}>Edit Profile</button>
      </div>
    </div>
  );
}

export default AboutMe;