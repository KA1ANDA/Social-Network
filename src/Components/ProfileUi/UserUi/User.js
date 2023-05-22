import React from "react";
import styles from "./user.module.scss"
import { useGetProfileInfoQuery } from "../../../Redux/api";
import { useSelector } from "react-redux";



const User = () => {

  const {myId ,userId} = useSelector(state => state.authSlice)

  const {data, isLoading, isError} = useGetProfileInfoQuery(userId)

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