import React, { useEffect } from "react";
import styles from "./status.module.scss";
import {useGetUserStatusQuery } from "../../../Redux/api";
import { useSelector } from "react-redux";



const Status = () => {
  
  const {myId} = useSelector(state => state.profileSlice)



  const { data, isLoading, isError } = useGetUserStatusQuery(myId);
  
 
 


  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error occurred while fetching data.</div>;
  }

  return (
    <div className={styles.status}>
      <div> {data} </div>
    </div>
  );
}

export default Status;