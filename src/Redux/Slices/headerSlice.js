import { createSlice } from "@reduxjs/toolkit";

const headerSlice = createSlice({
  name: "headerSlice",
  initialState: {
    title:'Profile',
  },
  reducers: {
    setTitle(state ,action){
      state.title = action.payload
    }
  },
});

export const {setTitle} = headerSlice.actions;
export default headerSlice.reducer;