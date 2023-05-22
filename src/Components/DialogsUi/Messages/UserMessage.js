import React, { useEffect, useState } from "react";
import styles from "./userMessage.module.scss";




const UserMessage = ({senderName , messageBody , time , seen}) => {

  const [viewed ,setViewed] = useState(false)

  useEffect(() => {
    if (seen){
      setViewed(true)
    }
  }, [seen]);

  return (
    <div className={styles.userMessage}>
      <div>{senderName}</div>
      <div>{messageBody}</div>
      <div>{time}</div>
      {viewed ? <div>seened ✔️</div> : <div>not seened</div>}
    </div>
  );
}

export default UserMessage;