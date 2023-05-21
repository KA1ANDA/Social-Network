import React, { useEffect } from "react";
import styles from "./nav.module.scss"
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setMyId } from "../../Redux/Slices/authSlice";
import { useGetUserInfoQuery } from "../../Redux/api";

const Nav = () => {

  // const dispatch = useDispatch();
  // const {data} = useGetUserInfoQuery()

  // const handleNavLinkClick = () => {
  //   if (data) {
  //     dispatch(setMyId(data.data.id));
  //   }
  // };

  return (
    <div className={styles.nav}>
      <div>
        <NavLink to="/profile">Profile</NavLink>
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