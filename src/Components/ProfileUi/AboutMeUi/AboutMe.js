import React, { useEffect, useState } from "react";
import styles from "./aboutMe.module.scss"
import { useAddProfileInfoMutation, useGetProfileInfoQuery } from "../../../Redux/api";
import { useSelector } from "react-redux";




const AboutMe = () => {

  const {myId} = useSelector(state => state.profileSlice)

  const {data, isLoading, isError} = useGetProfileInfoQuery(myId)
  const [setProfileInfo] = useAddProfileInfoMutation()
  


  const [editProfile ,setEditProfile] = useState(false)


  const [aboutMeValue ,setAboutMeValue] = useState('')
  const [jobDscValue ,setJobDscValue] = useState('')
  const [searchForJob, setSearchForJob] = useState(false)

  useEffect(() => {
    if (data) {
      setAboutMeValue(data.aboutMe);
      setSearchForJob(data.lookingForAJob);
      setJobDscValue(data.lookingForAJobDescription);
    }
  }, [data]);


  const params = {
    aboutMe: aboutMeValue,
    lookingForAJob: searchForJob,
    lookingForAJobDescription:jobDscValue,
    fullName: "samurai dmitry",
  };


  const handleAboutMeValue = (event) =>{
    setAboutMeValue(event.target.value)
  }

  const handleJobDscValue = (event) =>{
    setJobDscValue(event.target.value)
  }

  const toggleEditProfile = () => {
    setEditProfile(true)
  }
  
  const toggleCheckBox = () => {
    setSearchForJob(!searchForJob)
  }

  const handleSaveChanges = () =>{
    setProfileInfo(params)
  }


  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error occurred while fetching data.</div>;
  }


  return (
    <div className={styles.aboutMe}>

      {editProfile && 
        <div>
          <form>
            <div>
              <textarea onChange={handleAboutMeValue} value={aboutMeValue} ></textarea>
            </div>
            <div>
              <input type="checkbox" id="lookingForAJob" onChange={toggleCheckBox} checked={searchForJob}></input>
              <label htmlFor="lookingForAJob">looking for a job ?</label>
            </div>
            <div>
              <textarea onChange={handleJobDscValue} value={jobDscValue}  ></textarea>
            </div>

          </form>
        </div>
      }

      {data && 
      <div>
        <div>{data.aboutMe}</div>
          <div>
            Choose where to contact 
          </div>
          <div>
            <div>Looking For A Job ?</div>
            {data.lookingForAJob ? <span>✔️</span> : <span>❌</span>}
          </div>
        <div>{data.lookingForAJobDescription}</div>
      </div>
      }

      <div>
        <button onClick={toggleEditProfile}>Edit Profile</button>
      </div>

      {editProfile && 
        <div>
          <button onClick={handleSaveChanges}>SAVE</button>
        </div>
      }
    </div>
  );
}

export default AboutMe;