import { createSlice } from "@reduxjs/toolkit";


const ProfileSlice = createSlice({
  name:'ProfileSlice',
  initialState:{
    myId:null,
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
    editProfile:false,
  },
  reducers:{

    setMyId(state , action){
      state.myId = action.payload
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
    toggleEditProfile(state){
      state.editProfile = !state.editProfile
    }


  }
})

export const { setMyId , addNameValue , addAboutMeValue , addJobDscValue , toggleSearchForJobs , setSocialMediaValue , toggleEditProfile} = ProfileSlice.actions
export default ProfileSlice.reducer