import React from "react";
import styles from "./profilenav.module.scss"

const ProfileNav = () => {
  return (
    <div className={styles.profileNav}>
      <div>
        Posts
      </div>
      <div>
        About
      </div>
      <div>
        Friends
      </div>
      <div>
        Photos
      </div>
    </div>
  );
}

export default ProfileNav;