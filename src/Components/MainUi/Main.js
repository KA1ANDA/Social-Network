import React from "react";
import styles from "./main.module.scss"
import ProfileContent from "./../ProfileUi/ProfileContentUI/ProfileContent"
import { Route, Routes } from "react-router-dom";
import Users from "../UsersUi/Users";
import Login from "../LoginUi/Login";



const Main = () => {
  return (
    <div className={styles.main}>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/profile" element={<ProfileContent />}></Route>
        <Route path="/users" element={<Users />}></Route>
      </Routes>
    </div>
  );
}

export default Main;