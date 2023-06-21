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
    editMode:false,
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
    toggleEditMode(state){
      state.editMode = !state.editMode
    }


  }
})

export const { addNameValue , addAboutMeValue , addJobDscValue , toggleSearchForJobs , setSocialMediaValue , toggleEditMode , addProfilePhoto ,setEditStatus} = ProfileSlice.actions
export default ProfileSlice.reducer