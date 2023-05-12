import React from "react";
import styles from "./profilenav.module.scss"

const ProfileNav = () => {
  return (
    <div className={styles.profileNav}>
      <div>
        Profile
      </div>
      <div>
        Users
      </div>
      <div>
        Messages
      </div>
    </div>
  );
}

export default ProfileNav;