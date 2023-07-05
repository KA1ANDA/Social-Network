import React, { useEffect, useState } from "react";
import {useGetProfileInfoQuery, useGetUserInfoQuery, useLogOutMutation } from "../../Redux/api";
import styles from "./userHeaderInfo.module.scss"
import { useDispatch, useSelector } from "react-redux";
import { logOutSuccess, loginSuccess, setAuthorised, setMyId } from "../../Redux/Slices/authSlice";
import { Navigate } from "react-router-dom";
import {FiBell} from "react-icons/fi";
import {AiOutlineLogout} from "react-icons/ai";
import Loader from "../CommonComponents/Loader";



const UserHeaderInfo = () => {
  const dispatch = useDispatch()
  const [logOut] = useLogOutMutation()


  const {myId , userName , authorised} = useSelector(state => state.authSlice)
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

  if(myId === null){
    return <Navigate to="/" />;
  }

  if(!myId){
    return null;
  }


  return (
    <div className={styles.userHeaderInfo}>  
      <div className={styles.title}>
        <h3>{title}</h3>
      </div>
      <div className={styles.userInfo}> 
        <div  className={styles.profilePhoto}>
          {data && data.photos.small != null ?  <img src={data.photos.small}/> : <div className={styles.avatarDefault}></div>}
        </div>     
        <div className={styles.userName}>
          {userName}
        </div>
        <div>
          <button onClick={handleLogOut} className={styles.logOutButton }>
            <div className={styles.sign}><svg viewBox="0 0 512 512">
              <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path></svg></div>
    
            <div className={styles.text}>Logout</div>
          </button>
        </div> 
      </div>
       
    </div>
  );
}

export default UserHeaderInfo;