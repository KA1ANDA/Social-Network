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
        <div className={styles.logoImage}>
        </div> 
        <h3>Logo</h3>
      </div>
      <div className={styles.navigation}>
        <div>
          <NavLink to="/profile" onClick={handleNavLinkClick} className={({isActive}) => `${isActive && styles.active} ${styles.navLink}`}>
            <div className={styles.navIcon}><CgProfile   className={styles.activeIcon}/></div>
            <h3>Profile</h3>
          </NavLink>
        </div>
        <div>
          <NavLink to="/users" className={({isActive}) => `${isActive && styles.active} ${styles.navLink}`}>
            <div className={styles.navIcon}><FiUsers   className={styles.activeIcon}/></div>
            <h3>Users</h3>
          </NavLink>
        </div>
        <div>
          <NavLink to="/messages" className={({isActive}) => `${isActive && styles.active} ${styles.navLink}`}>
            <div className={styles.navIcon}><BsChat  className={styles.activeIcon} /></div>
            <h3>Messages</h3>
          </NavLink>
        </div>
        <div>
          <NavLink to="/chat" className={({isActive}) => `${isActive && styles.active} ${styles.navLink}`}>
            <div className={styles.navIcon}><IoChatbubblesOutline  className={styles.activeIcon} /></div>
            <h3>Chat</h3>
          </NavLink>
        </div>
        <div>
        <NavLink to="/settings" className={({isActive}) => `${isActive && styles.active} ${styles.navLink}`}>
          <div className={styles.navIcon}><LuSettings   className={styles.activeIcon}/></div>
          <h3>Settings</h3>
        </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Nav;