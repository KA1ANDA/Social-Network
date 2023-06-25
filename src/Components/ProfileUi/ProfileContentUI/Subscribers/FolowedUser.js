import React from "react";
import styles from "./folowedUser.module.scss";
import {useUnFollowUserMutation } from "../../../../Redux/ApiEndpoints/usersApi";
import {RiUserUnfollowFill} from "react-icons/ri"




const FolowedUser = ({photo , name , followed , userId}) => {

  const [toggleUnFollow] = useUnFollowUserMutation();

  const handleUnfollow = () => { 
    toggleUnFollow(userId)
  }

  

  return (
    < >
      {followed && 
      <div className={styles.folowedUser}>
        <div  className={styles.wrapper}>
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