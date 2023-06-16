import React, { useEffect, useState } from "react";
import styles from "./status.module.scss";
import {useGetUserStatusQuery } from "../../../Redux/api";
import { useSelector } from "react-redux";
import AddStatus from "./AddStatus/AddStatus";



const Status = () => {

  const {myId , userId} = useSelector(state => state.authSlice)
 


  const { data, isLoading, isError, isFetching } = useGetUserStatusQuery(userId);

  
 
 

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