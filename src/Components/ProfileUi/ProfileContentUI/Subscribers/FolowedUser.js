import React from "react";
import styles from "./folowedUser.module.scss"



const FolowedUser = ({photo , name , followed}) => {
  

  return (
    < >
      {followed && 
      <div className={styles.folowedUser}>
        <div className={styles.photo}> 
          <img src={photo}/> 
        </div>
        <div className={styles.name}>
          {name}
        </div>
      </div> 
      }
    </>
  );
}

export default FolowedUser;