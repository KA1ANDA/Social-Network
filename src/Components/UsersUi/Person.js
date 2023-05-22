import React, { useEffect, useState } from "react";
import styles from "./person.module.scss";
import { useFollowUserMutation, useGetFollowStatusQuery, useUnFollowUserMutation } from "../../Redux/ApiEndpoints/usersApi";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setMyId, setUserId } from "../../Redux/Slices/authSlice";



const Person = ({name,status,follow,photos,id,loading}) => {

  const dispatch = useDispatch();
  const setId = () => dispatch(setUserId(id))

  const [followState, setFollowState] = useState(follow)

  const [toggleFollow] = useFollowUserMutation()
  const [toggleUnFollow] = useUnFollowUserMutation()


  const handleFollow = () =>{
    if(followState===false){
      setFollowState(true)
      toggleFollow(id)
    }else{
      setFollowState(false)
      toggleUnFollow(id)
    }
  }

  return (
      <div className={styles.person}>
      < NavLink to={`/profile`}>
        <div onClick={setId}>
          {photos.large === null ? <div className={styles.avatarDefault}></div> : <img src={photos.large}/>}
        </div>
        <div>{name}</div>
        <div>{status}</div>
      </NavLink>
      <div>
        <button onClick={handleFollow} disabled={loading}>{followState ? 'UnFollow' : 'Follow'}</button>
      </div>
      </div>
  );
}

export default Person;