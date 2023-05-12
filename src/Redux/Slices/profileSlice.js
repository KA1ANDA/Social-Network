import { createSlice } from "@reduxjs/toolkit";


const ProfileSlice = createSlice({
  name:'ProfileSlice',
  initialState:{
    myId:'9',
  },
  reducers:{

    setMyId(state , action){
      state.myId = action.payload
    }
  }
})

export const { setMyId } = ProfileSlice.actions
export default ProfileSlice.reducer