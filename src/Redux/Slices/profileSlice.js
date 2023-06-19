import { createSlice } from "@reduxjs/toolkit";


const ProfileSlice = createSlice({
  name:'ProfileSlice',
  initialState:{
    profilePhoto:'',
    aboutMeValue:'',
    jobDscValue:'',
    nameValue:'',
    searchForJob:false,
    socialMedia:{
      facebook: "",
      twitter: "",
      instagram: "",
      youtube: "",
      github: "",
    },
    editBio:false,
    editStatus:false,
  },
  reducers:{

    setEditStatus(state , action){
      state.editStatus = action.payload
    },
  
    addProfilePhoto(state , action){
      state.profilePhoto = action.payload
    },
    addNameValue(state , action){
      state.nameValue = action.payload
    },
    addAboutMeValue(state , action){
      state.aboutMeValue = action.payload
    },

    addJobDscValue(state , action){
      state.jobDscValue = action.payload
    },

    toggleSearchForJobs(state , action){
      state.searchForJob = action.payload
    },
    setSocialMediaValue(state, action) {
      // const { id, value } = action.payload;
      // state.socialMedia[id] = value;
      state.socialMedia = { ...state.socialMedia, ...action.payload };
    },
    toggleEditBio(state){
      state.editBio = !state.editBio
    }


  }
})

export const { addNameValue , addAboutMeValue , addJobDscValue , toggleSearchForJobs , setSocialMediaValue , toggleEditBio , addProfilePhoto ,setEditStatus} = ProfileSlice.actions
export default ProfileSlice.reducer