import React, { useEffect, useState } from "react";
import styles from "./nav.module.scss"
import { NavLink, Navigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {setUserId } from "../../Redux/Slices/authSlice";
import { useGetTotalNewMessagesQuery } from "../../Redux/ApiEndpoints/dialogsApi";
import {LuSettings} from "react-icons/lu";
import {BsChat} from "react-icons/bs";
import {CgProfile} from "react-icons/cg";
import {FiUsers} from "react-icons/fi";
import {IoChatbubblesOutline} from "react-icons/io5";
import { setTitle } from "../../Redux/Slices/headerSlice";
import { useGetUserInfoQuery } from "../../Redux/api";







const Nav = () => {

  const dispatch = useDispatch();
  
  const {myId} = useSelector(state => state.authSlice)

  const {data , refetch} = useGetTotalNewMessagesQuery()



  const handleNavLinkClick = () => {
    if (myId) {
      dispatch(setUserId(myId));
    }
  };

  const handleTitleChange = (title) =>{
    dispatch(setTitle(title))

  }

 useEffect(() => {
    const interval = setInterval(() => {
      refetch();
    }, 3000); // Polling interval: every 3 seconds

    return () => {
      clearInterval(interval);
    };


  }, []);

  
  // if(loginData && loginData.resultCode===1){
  //   return <Navigate to="/"/>
  // }





  return (
    <div className={styles.nav}>
      <div className={styles.logo}>
        <div className={styles.logoImage}>
        </div> 
        <h3>Logo</h3>
      </div>
      <div className={styles.navigation}>
        <div onClick={() => handleTitleChange('Profile')}>
          <NavLink to={myId ? '/profile' : '/'} onClick={handleNavLinkClick} className={({isActive}) => `${isActive && myId && styles.active} ${styles.navLink}`}>
            <div className={styles.navIcon}><CgProfile   className={styles.activeIcon}/></div>
            <h3>Profile</h3>
          </NavLink>
        </div>
        <div onClick={() => handleTitleChange('Users')}>
          <NavLink to={myId ? '/users' : '/'} className={({isActive}) => `${isActive && myId && styles.active} ${styles.navLink}`}>
            <div className={styles.navIcon}><FiUsers   className={styles.activeIcon}/></div>
            <h3>Users</h3>
          </NavLink>
        </div>
        <div onClick={() => handleTitleChange('Messages')}>
          <NavLink to={myId ? '/messages' : '/'} className={({isActive}) => `${isActive && myId && styles.active} ${styles.navLink}`}>
            <div className={styles.navIcon}><BsChat  className={styles.activeIcon} /></div>
            <h3>Messages</h3>
            {data && data!==0 ? <div className={styles.messageNotification}>{data}</div> : null}
          </NavLink>
        </div>
        <div onClick={() => handleTitleChange('Chat')}>
          <NavLink to={myId ? '/chat' : '/'} className={({isActive}) => `${isActive && myId && styles.active} ${styles.navLink}`}>
            <div className={styles.navIcon}><IoChatbubblesOutline  className={styles.activeIcon} /></div>
            <h3>Chat</h3>
          </NavLink>
        </div>
        <div onClick={() => handleTitleChange('Settings')}>
        <NavLink to={myId ? '/settings' : '/'} className={({isActive}) => `${isActive && myId && styles.active} ${styles.navLink}`}>
          <div className={styles.navIcon}><LuSettings   className={styles.activeIcon}/></div>
          <h3>Settings</h3>
        </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Nav;