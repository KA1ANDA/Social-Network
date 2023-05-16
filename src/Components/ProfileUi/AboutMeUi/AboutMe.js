import React, { useEffect, useState } from "react";
import styles from "./aboutMe.module.scss"
import { useAddProfileInfoMutation, useAddProfilePhotoMutation, useGetProfileInfoQuery } from "../../../Redux/api";
import { useDispatch, useSelector } from "react-redux";
import { addAboutMeValue, addJobDscValue, addNameValue, setSocialMediaValue, toggleSearchForJobs } from "../../../Redux/Slices/profileSlice";




const AboutMe = () => {

  const {myId,aboutMeValue,jobDscValue,nameValue,searchForJob,socialMedia} = useSelector(state => state.profileSlice)

  const dispatch = useDispatch()

  const setAddNameValue = (event) => dispatch(addNameValue(event.target.value))
  const setAddAboutMeValue = (event) => dispatch(addAboutMeValue(event.target.value))
  const setAddJobDscValue = (event) => dispatch(addJobDscValue(event.target.value))
  const setToggleSearchForJobs = () =>  dispatch(toggleSearchForJobs(!searchForJob))

  

  const {data, isLoading, isError} = useGetProfileInfoQuery(myId)
  const [setProfileInfo] = useAddProfileInfoMutation()
  const [setProfilePhoto] = useAddProfilePhotoMutation()
  

  const [editProfile ,setEditProfile] = useState(false)

  const [selectedFile, setSelectedFile] = useState(null);
  // const [aboutMeValue ,setAboutMeValue] = useState('')
  // const [jobDscValue ,setJobDscValue] = useState('')
  // const [nameValue ,setNameValue] = useState('')
  // const [searchForJob, setSearchForJob] = useState(false)


  // const [socialMedia, setSocialMedia] = useState({
  //   facebook: "",
  //   twitter: "",
  //   instagram: "",
  //   youtube: "",
  //   github: ""
  // });


  useEffect(() => {
    if (data) {
      dispatch(addNameValue(data.fullName))
      dispatch(addAboutMeValue(data.aboutMe))
      dispatch(addJobDscValue(data.lookingForAJobDescription))
      dispatch(toggleSearchForJobs(data.lookingForAJob))
    
      // setSocialMedia({
      //   facebook: data.contacts.facebook,
      //   twitter: data.contacts.twitter,
      //   instagram: data.contacts.instagram,
      //   youtube: data.contacts.youtube,
      //   github: data.contacts.github
      // }); 
      
      // dispatch(setSocialMediaValue(data.contacts));
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



  // const handleNameValue = (event) =>{
  //   setNameValue(event.target.value)
  // }

  // const handleAboutMeValue = (event) =>{
  //   setAboutMeValue(event.target.value)
  // }



  // const handleJobDscValue = (event) =>{
  //   setJobDscValue(event.target.value)
  // }

  // const toggleCheckBox = () => {
  //   setSearchForJob(!searchForJob)
  // }



  const handleFileInputChange  = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };


  const toggleEditProfile = () => {
    setEditProfile(true)
  }
 

  const handleSocialMediaValue = (event) => {
    const { id, value } = event.target;
    // setSocialMedia((prevValues) => ({ ...prevValues, [id]: value }));
    dispatch(setSocialMediaValue({ [id]: value }));
  };

  const handleSaveChanges = () =>{
    setProfileInfo(params)

    if (!selectedFile) {
      console.log('No file selected.');
      return;
    }

    setProfilePhoto(selectedFile)
      .then((response) => {
        
        console.log(response);
      })
      .catch((error) => {
        
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
              <input id="name" onChange={setAddNameValue} value={nameValue}></input>
            </div>
            <div>
              <textarea onChange={setAddAboutMeValue} value={aboutMeValue} ></textarea>
            </div>
            <div>
              <input type="file" id="photo" accept="image/jpeg, image/png" onChange={handleFileInputChange } />
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
              <input type="checkbox" id="lookingForAJob" onChange={setToggleSearchForJobs} checked={searchForJob}></input>
              <label htmlFor="lookingForAJob">looking for a job ?</label>
            </div>
            <div>
              <textarea onChange={setAddJobDscValue} value={jobDscValue}  ></textarea>
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