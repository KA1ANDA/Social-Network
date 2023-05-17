import React, { useEffect } from "react";
import {useGetUserInfoQuery } from "../../Redux/api";
import styles from "./userHeaderInfo.module.scss"
import { useDispatch } from "react-redux";
import { setMyId } from "../../Redux/Slices/profileSlice";

const UserHeaderInfo = () => {
  const dispatch = useDispatch()
  const {data} = useGetUserInfoQuery()

  useEffect(() => {
    if (data) {
      dispatch(setMyId(data.data.id));
    }
  }, [data, dispatch]);


  return (
    <div className={styles.userHeaderInfo}>
      {data &&  
      <div>  
        <div>Email: {data.data.email}</div>
        <div>
          login: {data.data.login}
        </div>  
      </div>}
    </div>
  );
}

export default UserHeaderInfo;