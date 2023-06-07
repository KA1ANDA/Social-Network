import React, { useEffect, useState } from "react";
import styles from "./person.module.scss";
import { useFollowUserMutation, useGetFollowStatusQuery, useUnFollowUserMutation } from "../../Redux/ApiEndpoints/usersApi";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setMyId, setUserId } from "../../Redux/Slices/authSlice";
import { useStartChatMutation } from "../../Redux/ApiEndpoints/dialogsApi";



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


  const handleStartChatting = () => {
    startchat(id)
  }

  return (
      <div className={styles.person}>
      < NavLink to={`/profile`}  className={styles.profileInfo}>
        <div onClick={setId} className={styles.photo}>
          {photos.large === null ? <div className={styles.avatarDefault}></div> : <img src={photos.large}/>}
        </div>
        <div>
          <h1 className={styles.name}>{name}</h1>
        </div>
        <div className={styles.status}>{status}</div>
      </NavLink>
      <div className={styles.buttonWrapper}>
        <div className={styles.follow}>
          <button onClick={handleFollow} disabled={loading}>{followState ? 'UnFollow' : 'Follow'}</button>
        </div>
        <div className={styles.message}>
          <button onClick={handleStartChatting} >Message</button>
        </div>
      </div>
      </div>
  );
}

export default Person;