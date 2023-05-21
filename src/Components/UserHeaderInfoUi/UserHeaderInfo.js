import React, { useEffect, useState } from "react";
import {useGetUserInfoQuery, useLogOutMutation } from "../../Redux/api";
import styles from "./userHeaderInfo.module.scss"
import { useDispatch, useSelector } from "react-redux";
import { logOutSuccess, loginSuccess, setMyId } from "../../Redux/Slices/authSlice";
import { Navigate } from "react-router-dom";

const UserHeaderInfo = () => {
  const dispatch = useDispatch()
  const {data,isLoading} = useGetUserInfoQuery()
  const [logOut] = useLogOutMutation()


  const {myId} = useSelector(state => state.authSlice)
  const [userName,setUserName] = useState('')
  const [email,setEmail] = useState('')


  useEffect(() => {
    if (data) {
      setUserName(data.data.login)
      setEmail(data.data.email)
    }
  }, [data, dispatch]);



  const handleLogOut = () =>{
    logOut().then((response) => {
      if (response.data && response.data.resultCode === 0) {
        dispatch(logOutSuccess(null));
      }
    });
  }
  

  if(myId===null){
    return <Navigate to="/" />;
  }


  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.userHeaderInfo}>
      {data &&  
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
      } 
    </div>
  );
}

export default UserHeaderInfo;