import React from "react";
import styles from "./content.module.scss"
import StatusArea from "../postsUI/StatusArea";
import AboutMe from "../AboutMeUi/AboutMe";
import User from "../UserUi/User";

const Content = () => {
  return (
    <div className={styles.content}>
      <User />
      <StatusArea />
      <AboutMe />
    </div>
  );
}

export default Content;