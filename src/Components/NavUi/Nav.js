import React, { useEffect } from "react";
import styles from "./nav.module.scss"
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setMyId, setUserId } from "../../Redux/Slices/authSlice";
import { useGetUserInfoQuery } from "../../Redux/api";

const Nav = () => {

  const dispatch = useDispatch();
  
  const {myId} = useSelector(state => state.authSlice)
  

  const handleNavLinkClick = () => {
    if (myId) {
      dispatch(setUserId(myId));
    }
  };

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
      </div>
    </div>
  );
}

export default Nav;