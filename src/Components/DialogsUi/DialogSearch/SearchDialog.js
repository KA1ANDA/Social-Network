import React, { useState } from "react";
import styles from "./searchDialogs.module.scss";
import {CiSearch} from "react-icons/ci"
import { useDispatch } from "react-redux";
import { searchUsers } from "../../../Redux/Slices/dialogsSlice";



const SearchDialogs = () => {

  const dispatch = useDispatch()
  const [value ,setValue] = useState('')


  const handleValueChange = (event) => {
    dispatch(searchUsers(event.target.value))
    setValue(event.target.value)
  }

  return (
    <div className={styles.searchDialogs}>
      <div className={styles.inboxTitle}>
      <h2>Inbox</h2>
      </div>
      <div className={styles.searchInput}>
        <div className={styles.searchIcon}><CiSearch/></div>
        <input placeholder='Search...' onChange={handleValueChange} value={value}></input>
      </div>
    </div>
  );
}

export default SearchDialogs;