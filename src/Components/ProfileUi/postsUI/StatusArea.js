import React from "react";
import styles from "./statusArea.module.scss";
import AddPost from "./AddStatus/AddStatus"
import Status from "./Status"


const StatusArea = () => {

  return (
    <div className={styles.statusArea}>
      <Status />
    </div>
  );
}

export default StatusArea;