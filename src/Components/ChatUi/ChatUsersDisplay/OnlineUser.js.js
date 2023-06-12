import React from "react";
import styles from "./onlineUser.module.scss"


const OnlineUser = ({name , photo}) => {



  return (
    <div className={styles.onlineUser}>
      <div>
        <img src={photo} />
      </div>
     
      <div>
        {name}
      </div>
    </div>
  );
}

export default OnlineUser;