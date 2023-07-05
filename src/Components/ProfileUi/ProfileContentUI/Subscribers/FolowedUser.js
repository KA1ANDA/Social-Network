import React, { useEffect } from "react";
import styles from "./folowedUser.module.scss";
import {useUnFollowUserMutation } from "../../../../Redux/ApiEndpoints/usersApi";
import {RiUserUnfollowFill} from "react-icons/ri"
import { setUserId } from "../../../../Redux/Slices/authSlice";
import { useDispatch } from "react-redux";
import { setTitle } from "../../../../Redux/Slices/headerSlice";
import { setSubscribers } from "../../../../Redux/Slices/profileSlice";




const FolowedUser = ({photo , name , followed , userId}) => {

  const dispatch = useDispatch();
  const [toggleUnFollow] = useUnFollowUserMutation();
  

  const handleUnfollow = () => { 
    toggleUnFollow(userId)
  }

  const setId = () => dispatch(setUserId(userId))

  const handleTitleChange = (title) =>{
    setId()
    dispatch(setTitle(title))

  }


  
  

  return (
    < >
      {followed && 
      <div className={styles.folowedUser}>
        <div  className={styles.wrapper} onClick={() => handleTitleChange('User Profile')}>
          <div className={styles.photo}> 
            <img src={photo}  className={`${!photo && styles.default}`}/> 
          </div>
          <div className={styles.name}>
            {name}
          </div>
        </div>
        <div  className={styles.unFollow} onClick={handleUnfollow}>
          {/* <RiUserUnfollowFill /> */}
        </div>
      </div> 
      }
    </>
  );
}

export default FolowedUser;