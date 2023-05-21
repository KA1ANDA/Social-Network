import React, { useEffect, useState } from "react";
import styles from "./aboutMe.module.scss"
import { useAddProfileInfoMutation, useAddProfilePhotoMutation, useGetProfileInfoQuery } from "../../../Redux/api";
import { useDispatch, useSelector } from "react-redux";
import { addAboutMeValue, addJobDscValue, addNameValue, setSocialMediaValue, toggleSearchForJobs ,toggleEditProfile} from "../../../Redux/Slices/profileSlice";




const AboutMeEdit = () => {

  const {aboutMeValue,jobDscValue,nameValue,searchForJob,socialMedia , editProfile} = useSelector(state => state.profileSlice)
  const {myId} = useSelector(state => state.authSlice)
  const dispatch = useDispatch()

  const setAddNameValue = (event) => dispatch(addNameValue(event.target.value))
  const setAddAboutMeValue = (event) => dispatch(addAboutMeValue(event.target.value))
  const setAddJobDscValue = (event) => dispatch(addJobDscValue(event.target.value))
  const setToggleSearchForJobs = () =>  dispatch(toggleSearchForJobs(!searchForJob))
  const setEditProfile = () => dispatch(toggleEditProfile())

  

  const {data, isLoading, isError} = useGetProfileInfoQuery(myId)
  const [setProfileInfo] = useAddProfileInfoMutation()
  const [setProfilePhoto] = useAddProfilePhotoMutation()
  


  const [selectedFile, setSelectedFile] = useState(null);



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




  const handleFileInputChange  = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

 

  const handleSocialMediaValue = (event) => {
    const { id, value } = event.target;
    dispatch(setSocialMediaValue({ [id]: value }));
  };

  const handleSaveChanges = () =>{
    setProfileInfo(params)
    setEditProfile()

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
          <div>
            <button onClick={handleSaveChanges}>SAVE</button>
          </div>
        </div>
      }      
    </div>
  );
}

export default AboutMeEdit;