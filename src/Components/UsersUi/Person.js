import React, { useEffect, useState } from "react";
import styles from "./person.module.scss";
import { useFollowUserMutation, useGetFollowStatusQuery, useUnFollowUserMutation } from "../../Redux/ApiEndpoints/usersApi";



const Person = ({name,status,follow,photos,id,loading}) => {

  // const {data} = useGetFollowStatusQuery(key);
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
      <div>
        {photos.large === null ? <div className={styles.avatarDefault}></div> : <img src={photos.large}/>}
      </div>
      <div>{name}</div>
      <div>{status}</div>
      <div>
        <button onClick={handleFollow} disabled={loading}>{followState ? 'UnFollow' : 'Follow'}</button>
      </div>
    </div>
  );
}

export default Person;