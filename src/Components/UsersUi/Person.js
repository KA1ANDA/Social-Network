import React, { useEffect, useState } from "react";
import styles from "./person.module.scss";
import { useFollowUserMutation, useGetFollowStatusQuery, useUnFollowUserMutation } from "../../Redux/ApiEndpoints/usersApi";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setMyId, setUserId } from "../../Redux/Slices/authSlice";
import { useStartChatMutation } from "../../Redux/ApiEndpoints/dialogsApi";
import { setTitle } from "../../Redux/Slices/headerSlice";





const Person = ({name,status,follow,photos,id,loading}) => {

  const dispatch = useDispatch();
  const setId = () => dispatch(setUserId(id))

  const [followState, setFollowState] = useState(follow)

  const [toggleFollow] = useFollowUserMutation()
  const [toggleUnFollow] = useUnFollowUserMutation()
  const [startchat , data] = useStartChatMutation()

  console.log(data)


  const handleFollow = () =>{
    if(followState===false){
      setFollowState(true)
      toggleFollow(id)
    }else{
      setFollowState(false)
      toggleUnFollow(id)
    }
  }

  
  const handleTitleChange = (title) =>{
    dispatch(setTitle(title))

  }

  const handleStartChatting = () => {
    startchat(id)
  }

  return (
      <div className={styles.person} onClick={() => handleTitleChange('User Profile')}>
      <NavLink to={`/profile`}  className={styles.profileInfo} onClick={setId}>
        <div  className={styles.photo}>
          {photos.large === null ? <div className={styles.avatarDefault}></div> : <img src={photos.large}/>}
        </div>
        <div>
          <h1 className={styles.name}>{name}</h1>
        </div>
        <div className={styles.status}>{status ? status : 'No status'}</div>
      </NavLink>
      <div className={styles.buttonWrapper}>
        <div >
          <button onClick={handleFollow} disabled={loading} className={followState && styles.followed}>{followState ? 'UnFollow' : 'Follow'}</button>
        </div>
        <NavLink to='/messages' className={styles.message}>
          <button onClick={handleStartChatting} >Message</button>
        </NavLink>
      </div>
      </div>
  );
}

export default Person;