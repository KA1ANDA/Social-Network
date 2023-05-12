import React, { useState } from "react";
import styles from "./addStatus.module.scss"
import { useAddStatusMutation } from "../../../../Redux/api";



const AddPost = () => {

  const [postValue , setPostValue] = useState('')
  console.log(postValue)

  const [addStatus] = useAddStatusMutation()


  const handleAddStatus = () =>{
      if (postValue.trim()) {
        addStatus(postValue);
        setPostValue("");
      }
    };
  
  

  const changeValue = (event) =>{
    setPostValue(event.target.value)
  };

  


  return (
    <div className={styles.addStatus}>
      <div>
        <input placeholder="What's on your mind?" onChange={changeValue} value={postValue}></input>
      </div>
      <div>
        <button onClick={handleAddStatus}>add post</button>
      </div>
    </div>
  );
}

export default AddPost;