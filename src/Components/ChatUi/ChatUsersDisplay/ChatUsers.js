import React, { useState } from "react";
import styles from "./chatUsers.module.scss"
import {IoIosArrowDropdown} from "react-icons/io"
import OnlineUser from "./OnlineUser.js";
import { useSelector } from "react-redux";

const ChatUsers = () => {


  const {activeUsersInChat} = useSelector(state => state.chatSlice)
  const [activeUsers,setActiveUsers] = useState(false);


  return (
    <div className={`${activeUsers && styles.activeChatUsers} ${styles.chatUsers}`}  onClick={() => setActiveUsers(!activeUsers)}>
     <div className={styles.title}>
        <div className={styles.titleWrapper}>
          <h2>Active Users</h2>
          <div className={styles.count}>
            {activeUsersInChat.length} online
          </div>
        </div>
        <div className={`${activeUsers && styles.activeIcon} ${styles.icon}`}>
          <IoIosArrowDropdown/>
        </div>
     </div>

     
      <div className={styles.activeUsers}>
        {activeUsersInChat ?
         activeUsersInChat.map(user => <OnlineUser 
          key = {user.userId}
          personId = {user.userId}
          name = {user.userName}
          photo = {user.photo} />)
          :
          <div className={styles.empty}> Empty... </div>}
      </div>    
       
    </div>
  );
}

export default ChatUsers;