import React, { useEffect, useState } from "react";
import styles from "./status.module.scss";
import {useGetUserStatusQuery } from "../../../Redux/api";
import { useSelector } from "react-redux";
import AddStatus from "./AddStatus/AddStatus";
import Loader from "../../CommonComponents/Loader";



const Status = () => {

  const {myId , userId} = useSelector(state => state.authSlice)
 


  const { data, isLoading, isError, isFetching } = useGetUserStatusQuery(userId);

  
 
 

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <div>Error occurred while fetching data.</div>;
  }

  return (
    <div className={styles.status}>
      {data ?
        <div> {data} </div> :
        <div className={styles.noStatus}>Status is Empty</div>
      }
      
    </div>
  );
}

export default Status;