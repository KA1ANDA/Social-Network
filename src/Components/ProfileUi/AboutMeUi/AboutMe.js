import React, { useEffect, useState } from "react";
import styles from "./aboutMe.module.scss"
import { useAddProfileInfoMutation, useAddProfilePhotoMutation, useGetProfileInfoQuery } from "../../../Redux/api";
import { useSelector } from "react-redux";




const AboutMe = () => {

  const {myId} = useSelector(state => state.profileSlice)

  const {data, isLoading, isError} = useGetProfileInfoQuery(myId)
  const [setProfileInfo] = useAddProfileInfoMutation()
  const [setProfilePhoto] = useAddProfilePhotoMutation()
  

  const [editProfile ,setEditProfile] = useState(false)

  const [selectedFile, setSelectedFile] = useState(null);
  const [aboutMeValue ,setAboutMeValue] = useState('')
  const [jobDscValue ,setJobDscValue] = useState('')
  const [nameValue ,setNameValue] = useState('')


  const [socialMedia, setSocialMedia] = useState({
    facebook: "",
    twitter: "",
    instagram: "",
    youtube: "",
    github: ""
  });


  const [searchForJob, setSearchForJob] = useState(false)

  useEffect(() => {
    if (data) {
      setAboutMeValue(data.aboutMe);
      setSearchForJob(data.lookingForAJob);
      setJobDscValue(data.lookingForAJobDescription);
      setSocialMedia({
        facebook: data.contacts.facebook,
        twitter: data.contacts.twitter,
        instagram: data.contacts.instagram,
        youtube: data.contacts.youtube,
        github: data.contacts.github
      }); 
      setNameValue(data.fullName);
    }
  }, [data]);


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



  const handleNameValue = (event) =>{
    setNameValue(event.target.value)
  }

  const handleAboutMeValue = (event) =>{
    setAboutMeValue(event.target.value)
  }

  const handleFileInputChange  = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };



  const handleSocialMediaValue = (event) => {
    const { id, value } = event.target;
    setSocialMedia((prevValues) => ({ ...prevValues, [id]: value }));
  };
  

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

    if (!selectedFile) {
      console.log('No file selected.');
      return;
    }

    setProfilePhoto(selectedFile)
      .then((response) => {
        // Handle successful response
        console.log(response);
      })
      .catch((error) => {
        // Handle error
        console.error(error);
      });
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
              <label htmlFor="name">change name:</label>
              <input id="name" onChange={handleNameValue} value={nameValue}></input>
            </div>
            <div>
              <textarea onChange={handleAboutMeValue} value={aboutMeValue} ></textarea>
            </div>
            <div>
              <input type="file" id="photo" onChange={handleFileInputChange } />
            </div>
            <div>
              <label htmlFor="facebook">facebook:</label>
              <input id="facebook" onChange={handleSocialMediaValue} value={socialMedia.facebook}></input>
            </div>
            <div>
              <label htmlFor="twitter">twitter:</label>
              <input id="twitter"  onChange={handleSocialMediaValue} value={socialMedia.twitter}></input>
            </div>
            <div>
              <label htmlFor="instagram">instagram:</label>
              <input id="instagram"  onChange={handleSocialMediaValue} value={socialMedia.instagram}></input>
            </div>
            <div>
              <label htmlFor="youtube">youtube:</label>
              <input id="youtube"  onChange={handleSocialMediaValue} value={socialMedia.youtube}></input>
            </div>
            <div>
              <label htmlFor="github">github:</label>
              <input id="github" onChange={handleSocialMediaValue} value={socialMedia.github}></input>
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
        {Object.values(socialMedia).every((value) => value === "") ? 
          <div>
            Choose where to contact 
          </div>
          :
          <div>
            <ul>
              <li>facebook : {socialMedia.facebook}</li>
              <li>twitter : {socialMedia.twitter}</li>
              <li>instagram : {socialMedia.instagram}</li>
              <li>youtube : {socialMedia.youtube}</li>
              <li>github : {socialMedia.github}</li>
            </ul>
          </div> }
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