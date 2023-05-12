import React from "react";
import styles from "./statusArea.module.scss";
import AddPost from "./AddStatus/AddStatus"
import Status from "./Status"


const StatusArea = () => {

  return (
    <div>
      <AddPost/>   
      <div className={styles.statusArea}>
        <Status />
      </div>
    </div>
  );
}

export default StatusArea;