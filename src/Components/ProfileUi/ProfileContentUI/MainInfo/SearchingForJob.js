import React from "react";
import styles from "./searchingForJob.module.scss"
import { useSelector } from "react-redux";
import { useGetProfileInfoQuery } from "../../../../Redux/api";


const SearchingForJob = () => {

  const {userId} = useSelector(state => state.authSlice)
  const {data, isLoading, isError} = useGetProfileInfoQuery(userId)

  return (
    <div className={styles.searchingForJob}>
      {data && 
      <div  className={styles.wrapper}>
        {data.lookingForAJob ? <div className={styles.employed}>employed</div>: <div className={styles.unemployed}>unemployed</div>}
      </div>
      }
    </div>     
  );
}

export default SearchingForJob;