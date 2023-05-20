import React, { useEffect } from "react";
import {useGetUserInfoQuery, useLogOutMutation } from "../../Redux/api";
import styles from "./userHeaderInfo.module.scss"
import { useDispatch } from "react-redux";
import { setMyId } from "../../Redux/Slices/profileSlice";

const UserHeaderInfo = () => {
  const dispatch = useDispatch()
  const {data,isLoading} = useGetUserInfoQuery()
  const [logOut] = useLogOutMutation()

  useEffect(() => {
    if (data) {
      dispatch(setMyId(data.data.id));
    }
  }, [data, dispatch]);


  const handleLogOut = () =>{
    logOut()
  }


  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.userHeaderInfo}>
      {data &&  
        <div>  
          <div>
            Email: {data.data.email}
          </div>
          <div>
            login: {data.data.login}
          </div>
          <div>
            <button onClick={handleLogOut}>Log Out</button>
          </div> 
        </div>
      } 
    </div>
  );
}

export default UserHeaderInfo;