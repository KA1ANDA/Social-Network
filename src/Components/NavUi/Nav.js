import React, { useEffect, useState } from "react";
import styles from "./nav.module.scss"
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {setUserId } from "../../Redux/Slices/authSlice";
import { useGetTotalNewMessagesQuery } from "../../Redux/ApiEndpoints/dialogsApi";
import {LuSettings} from "react-icons/lu";
import {BsChat} from "react-icons/bs";
import {CgProfile} from "react-icons/cg";
import {FiUsers} from "react-icons/fi";
import {IoChatbubblesOutline} from "react-icons/io5";







const Nav = () => {

  const dispatch = useDispatch();
  
  const {myId} = useSelector(state => state.authSlice)

  const {data} = useGetTotalNewMessagesQuery()
  
  const [message , setMessage] = useState(false)

  const handleNavLinkClick = () => {
    if (myId) {
      dispatch(setUserId(myId));
    }
  };

  useEffect(() => {
    if (data){
      setMessage(true)
    }
  }, [data , message]);

  return (
    <div className={styles.nav}>
      <div className={styles.logo}> 
        Logo
      </div>
      <div className={styles.navigation}>
        <div>
          <div className={styles.navIcon}><CgProfile /></div>
          <NavLink to="/profile" onClick={handleNavLinkClick}  className={styles.navLink}>Profile</NavLink>
        </div>
        <div>
          <div className={styles.navIcon}><FiUsers /></div>
          <NavLink to="/users" className={styles.navLink}>Users</NavLink>
        </div>
        <div>
          <div className={styles.navIcon}><BsChat /></div>
          <NavLink to="/messages" className={styles.navLink}>Messages</NavLink>
        </div>
        <div>
          <div className={styles.navIcon}><IoChatbubblesOutline /></div>
          <NavLink to="/chat" className={styles.navLink}>Chat</NavLink>
        </div>
        <div>
        <div className={styles.navIcon}><LuSettings /></div>
        <NavLink to="/settings" className={styles.navLink}>Settings</NavLink>
        </div>
      </div>
    </div>
  );
}

export default Nav;