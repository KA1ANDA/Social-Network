import React, { useState } from "react";
import styles from "./bioEdit.module.scss"
import { useDispatch, useSelector } from "react-redux";
import { addAboutMeValue } from "../../../../Redux/Slices/profileSlice";





const BioEdit = () => {


  const {aboutMeValue , editBio} = useSelector(state => state.profileSlice);
  const dispatch = useDispatch();


  const setAddAboutMeValue = (event) => dispatch(addAboutMeValue(event.target.value));
  




  return (
    <div className={styles.bioEdit}>
      <textarea onChange={setAddAboutMeValue} value={aboutMeValue} ></textarea>
      <div className={styles.buttonEdit}>
        <div className={styles.edit}>
          Edit
        </div>
      </div>
    </div>
  );
}

export default BioEdit;