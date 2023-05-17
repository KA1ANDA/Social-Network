import React from "react";
import styles from "./nav.module.scss"
import { NavLink } from "react-router-dom";

const Nav = () => {
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