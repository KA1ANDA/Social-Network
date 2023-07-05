import React, { useEffect } from "react";
import styles from "./subscribers.module.scss"
import { useGetFollowedUsersQuery, useGetUsersQuery } from "../../../../Redux/ApiEndpoints/usersApi";
import FolowedUser from "./FolowedUser.js";
import Loader from "../../../CommonComponents/Loader";
import { useSelector } from "react-redux";


const Subscribers = () => {
  
const {data , isLoading} = useGetFollowedUsersQuery()

const {myId ,userId} = useSelector(state => state.authSlice)


  // if(isLoading){
  //   return <Loader />
  // }



  return (
    <div className={styles.subscribers}>
      <div className={styles.title}>Followed</div>
      {myId === userId ?
        <div className={styles.usersWrapper}>
          {data  && data.items.map(user => <FolowedUser key={user.id} photo={user.photos.small}  name={user.name} followed={user.followed} userId={user.id}/> )}
        </div> :
        <div className={styles.usersFollowed}>No Followed Users</div>
      }
    </div>
  );
}

export default Subscribers;