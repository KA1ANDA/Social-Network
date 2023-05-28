import React, { useEffect, useState } from "react";
import styles from "./nav.module.scss"
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setMyId, setUserId } from "../../Redux/Slices/authSlice";
import { useGetUserInfoQuery } from "../../Redux/api";
import { useGetTotalNewMessagesQuery } from "../../Redux/ApiEndpoints/dialogsApi";

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
      <div>
        <NavLink to="/profile" onClick={handleNavLinkClick}>Profile</NavLink>
      </div>
      <div>
        <NavLink to="/users">Users</NavLink>
      </div>
      <div>
        <NavLink to="/messages">Messages</NavLink>
        {data && message && <div className={styles.newMessageIndicator}>{data}</div> }
      </div>
      <div>
        <NavLink to="/chat">Chat</NavLink>
      </div>
    </div>
  );
}

export default Nav;