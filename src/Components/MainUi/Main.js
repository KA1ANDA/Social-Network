import React from "react";
import styles from "./main.module.scss"
import ProfileContent from "./../ProfileUi/ProfileContentUI/ProfileContent"
import { Route, Routes } from "react-router-dom";
import Users from "../UsersUi/Users";
import Login from "../LoginUi/Login";
import DialogsContent from "../DialogsUi/DialogsContent/DialogsContent";



const Main = () => {
  return (
    <div className={styles.main}>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/profile" element={<ProfileContent />}></Route>
        <Route path="/users" element={<Users />}></Route>
        <Route path="/messages" element={<DialogsContent />}></Route>
      </Routes>
    </div>
  );
}

export default Main;