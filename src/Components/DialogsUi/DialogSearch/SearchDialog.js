import React from "react";
import styles from "./searchDialogs.module.scss";
import {CiSearch} from "react-icons/ci"



const SearchDialogs = () => {
  return (
    <div className={styles.searchDialogs}>
      <div className={styles.inboxTitle}>
      <h2>Inbox</h2>
      </div>
      <div className={styles.searchInput}>
        <div className={styles.searchIcon}><CiSearch/></div>
        <input placeholder='Search...'></input>
      </div>
    </div>
  );
}

export default SearchDialogs;