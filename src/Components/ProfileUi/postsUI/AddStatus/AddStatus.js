import React, { useState } from "react";
import styles from "./addStatus.module.scss"
import { useAddStatusMutation } from "../../../../Redux/api";
import { useDispatch, useSelector } from "react-redux";
import { setEditStatus } from "../../../../Redux/Slices/profileSlice";



const AddStatus = () => {
  const dispatch = useDispatch()


  const {editStatus} = useSelector(state => state.profileSlice)
  const [postValue , setPostValue] = useState('')
  console.log(postValue)

  const [addStatus] = useAddStatusMutation()


  const handleAddStatus = () =>{
      if (postValue.trim()) {
        addStatus(postValue);
        setPostValue("");
        dispatch(setEditStatus(false))
      }
    };
  
  

  const changeValue = (event) =>{
    setPostValue(event.target.value)
  };

  


  return (
    <div className={`${styles.addStatus} ${editStatus && styles.editMode}`} >
      <div className={styles.changeStatus}>
        <input placeholder="What's on your mind?" onChange={changeValue} value={postValue}></input>
      </div>
      <div>
        <button onClick={handleAddStatus}>add post</button>
      </div>
    </div>
  );
}

export default AddStatus;