import React from "react";
import styles from "./content.module.scss"
import Posts from "../postsUI/Posts";

const Content = () => {
  return (
    <div className={styles.content}>
      <Posts />
    </div>
  );
}

export default Content;