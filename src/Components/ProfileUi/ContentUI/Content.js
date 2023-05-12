import React from "react";
import styles from "./content.module.scss"
import StatusArea from "../postsUI/StatusArea";

const Content = () => {
  return (
    <div className={styles.content}>
      <StatusArea />
    </div>
  );
}

export default Content;