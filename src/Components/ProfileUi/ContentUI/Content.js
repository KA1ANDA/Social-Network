import React from "react";
import styles from "./content.module.scss"
import StatusArea from "../postsUI/StatusArea";
import AboutMe from "../AboutMeUi/AboutMe";

const Content = () => {
  return (
    <div className={styles.content}>
      <StatusArea />
      <AboutMe />
    </div>
  );
}

export default Content;