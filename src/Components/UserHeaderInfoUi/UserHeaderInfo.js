import React, { useEffect, useState } from "react";
import {useGetUserInfoQuery, useLogOutMutation } from "../../Redux/api";
import styles from "./userHeaderInfo.module.scss"
import { useDispatch, useSelector } from "react-redux";
import { logOutSuccess, loginSuccess, setMyId } from "../../Redux/Slices/authSlice";
import { Navigate } from "react-router-dom";

const UserHeaderInfo = () => {
  const dispatch = useDispatch()
  const [logOut] = useLogOutMutation()


  const {myId , email , userName} = useSelector(state => state.authSlice)


  
  const handleLogOut = async () => {
    try {
      const response = await logOut();
      if (response.data && response.data.resultCode === 0) {
        dispatch(logOutSuccess(null));
      }
    } catch (error) {
      // Handle any errors that occur during the logout process
    }
  };

  if(myId===null){
    return <Navigate to="/" />;
  }


  return (
    <div className={styles.userHeaderInfo}>
        <div>  
          <div>
            Email: {email}
          </div>
          <div>
            login: {userName}
          </div>
          <div>
            <button type="button" onClick={handleLogOut} >Log Out</button>
          </div> 
        </div>
    </div>
  );
}

export default UserHeaderInfo;