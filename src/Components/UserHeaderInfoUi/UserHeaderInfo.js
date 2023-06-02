import React, { useEffect, useState } from "react";
import {useGetProfileInfoQuery, useGetUserInfoQuery, useLogOutMutation } from "../../Redux/api";
import styles from "./userHeaderInfo.module.scss"
import { useDispatch, useSelector } from "react-redux";
import { logOutSuccess, loginSuccess, setMyId } from "../../Redux/Slices/authSlice";
import { Navigate } from "react-router-dom";
import {FiBell} from "react-icons/fi";
import {AiOutlineLogout} from "react-icons/ai";



const UserHeaderInfo = () => {
  const dispatch = useDispatch()
  const [logOut] = useLogOutMutation()


  const {myId , userName} = useSelector(state => state.authSlice)
  const {title} = useSelector(state => state.headerSlice)


  const {data, isLoading, isError} = useGetProfileInfoQuery(myId)


  
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
      <div className={styles.title}>
        <h3>{title}</h3>
      </div>

      <div className={styles.userInfo}>
        <div className={styles.bell}>
         <FiBell />
        </div>
        <div  className={styles.profilePhoto}>
          {data && data.photos.small != null ?  <img src={data.photos.small}/> : <div className={styles.avatarDefault}></div>}
        </div>
        <div className={styles.userName}>
          {userName}
        </div>
        <div>
          <div onClick={handleLogOut} className={styles.logOutButton}><AiOutlineLogout/></div>
        </div> 
      </div>
       
    </div>
  );
}

export default UserHeaderInfo;