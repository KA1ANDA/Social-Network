import React, { useEffect } from "react";
import styles from "./user.module.scss"
import { useGetProfileInfoQuery } from "../../../Redux/api";
import { useDispatch, useSelector } from "react-redux";
import { addProfilePhoto } from "../../../Redux/Slices/profileSlice";



const User = () => {
  const dispatch = useDispatch()

  const {myId ,userId} = useSelector(state => state.authSlice)

  const {data, isLoading, isError} = useGetProfileInfoQuery(userId)
  
  useEffect(() => {
    if (data) {
      dispatch(addProfilePhoto(data.photos.small));
    }
  }, [data]);

  return (
    <div>
      {data &&
      <div className={styles.user} > 
        {data.photos.large === null ? <div className={styles.avatarDefault}></div> : <img src={data.photos.large}/>}
        <h2>{data.fullName}</h2>
      </div>
      }
    </div>
  );
}

export default User;