import React from "react";
import styles from "./person.module.scss";



const Person = ({name,status,follow,photos}) => {
  return (
    <div className={styles.person}>
      <div>
        {photos.large === null ? <div className={styles.avatarDefault}></div> : <img src={photos.large}/>}
      </div>
      <div>{name}</div>
      <div>{status}</div>
      <div>
        <button>Follow</button>
      </div>
    </div>
  );
}

export default Person;