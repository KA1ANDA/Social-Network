import React, { useEffect, useState } from "react";
import styles from "./aboutMeEdit.module.scss"
import { useAddProfileInfoMutation, useAddProfilePhotoMutation, useGetProfileInfoQuery } from "../../../Redux/api";
import { useDispatch, useSelector } from "react-redux";
import { addAboutMeValue, addJobDscValue, addNameValue, setSocialMediaValue, toggleSearchForJobs } from "../../../Redux/Slices/profileSlice";


import {AiFillFacebook} from "react-icons/ai";
import {AiFillInstagram} from "react-icons/ai";
import {AiFillTwitterSquare} from "react-icons/ai";
import {AiFillYoutube} from "react-icons/ai";
import {AiFillGithub} from "react-icons/ai";






const AboutMeEdit = () => {

  const {aboutMeValue,jobDscValue,nameValue,searchForJob,socialMedia } = useSelector(state => state.profileSlice)
  const {myId} = useSelector(state => state.authSlice)
  const dispatch = useDispatch()

  const setAddNameValue = (event) => dispatch(addNameValue(event.target.value))
  const setAddAboutMeValue = (event) => dispatch(addAboutMeValue(event.target.value))
  const setAddJobDscValue = (event) => dispatch(addJobDscValue(event.target.value))
  const setToggleSearchForJobs = () =>  dispatch(toggleSearchForJobs(!searchForJob))
  // const setEditProfile = () => dispatch(toggleEditProfile())

  

  const {data, isLoading, isError} = useGetProfileInfoQuery(myId)
  const [setProfileInfo] = useAddProfileInfoMutation()
  




  useEffect(() => {
    if (data) {
      dispatch(addNameValue(data.fullName))
      dispatch(addAboutMeValue(data.aboutMe))
      dispatch(addJobDscValue(data.lookingForAJobDescription))
      dispatch(toggleSearchForJobs(data.lookingForAJob))
      dispatch(setSocialMediaValue(data.contacts));
    }
  }, [data , dispatch]);


  const params = {
    aboutMe: aboutMeValue,
    lookingForAJob: searchForJob,
    lookingForAJobDescription: jobDscValue,
    fullName: nameValue,
    contacts: {
      facebook: socialMedia.facebook,
      twitter: socialMedia.twitter,
      instagram: socialMedia.instagram,
      youtube: socialMedia.youtube,
      github: socialMedia.github
    }
  };






 

  const handleSocialMediaValue = (event) => {
    const { id, value } = event.target;
    dispatch(setSocialMediaValue({ [id]: value }));
  };

  const handleSaveChanges = () =>{
    setProfileInfo(params)
    // setEditProfile()
  }


  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error occurred while fetching data.</div>;
  }


  return (
    <div className={styles.aboutMeEdit}>

      
        <div>
          <form>

            <div className={styles.firstLineWrapper}>
              <div className={styles.name}>
                <div className={styles.title}>Name</div>
                <input id="name" onChange={setAddNameValue} value={nameValue}></input>
              </div>
              <div className={styles.jobSearch}>
                <input type="checkbox" id="lookingForAJob" onChange={setToggleSearchForJobs} checked={searchForJob}></input>
                <label htmlFor="lookingForAJob">looking for a job ?</label>
              </div>
            </div>

           <div className={styles.info}>
            <div className={styles.bio}>
                <div className={styles.title}>Write about your self</div>
                <div className={styles.textareaWrapper}>
                  <textarea onChange={setAddAboutMeValue} value={aboutMeValue} ></textarea>
                </div>
              
              </div>

              <div className={styles.skills}>
                <div className={styles.title}>Write about Your Skills / Experience</div>
                <div className={styles.textareaWrapper}>
                  <textarea onChange={setAddJobDscValue} value={jobDscValue}  ></textarea>
                </div>
                
              </div>
           </div>
            


            <div className={styles.socialMedia}>
              <div className={styles.title}>Social Media</div>
              <div className={styles.socialMediaWrapper}>
                <div>
                  <label htmlFor="facebook"><AiFillFacebook/></label>
                  <input id="facebook" onChange={handleSocialMediaValue} value={socialMedia.facebook}></input>
                </div>
                <div>
                  <label htmlFor="twitter"> <AiFillTwitterSquare /></label>
                  <input id="twitter"  onChange={handleSocialMediaValue} value={socialMedia.twitter}></input>
                </div>
                <div>
                  <label htmlFor="instagram"><AiFillInstagram /></label>
                  <input id="instagram"  onChange={handleSocialMediaValue} value={socialMedia.instagram}></input>
                </div>
                <div>
                  <label htmlFor="youtube"><AiFillYoutube/></label>
                  <input id="youtube"  onChange={handleSocialMediaValue} value={socialMedia.youtube}></input>
                </div>
                <div>
                  <label htmlFor="github"><AiFillGithub/></label>
                  <input id="github" onChange={handleSocialMediaValue} value={socialMedia.github}></input>
                </div>
              </div>
              
            </div>

          </form>
          <div>
            <button onClick={handleSaveChanges}>SAVE</button>
          </div>
        </div>
           
    </div>
  );
}

export default AboutMeEdit;