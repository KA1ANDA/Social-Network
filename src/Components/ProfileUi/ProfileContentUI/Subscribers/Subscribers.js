import React, { useEffect } from "react";
import styles from "./subscribers.module.scss"
import { useGetFollowedUsersQuery, useGetUsersQuery } from "../../../../Redux/ApiEndpoints/usersApi";
import FolowedUser from "./FolowedUser.js";


const Subscribers = () => {
  
const {data} = useGetFollowedUsersQuery()


  return (
    <div className={styles.subscribers}>
      <div className={styles.title}>Followed</div>
      <div className={styles.usersWrapper}>
        {data && data.items.map(user => <FolowedUser photo={user.photos.small}  name={user.name} followed={user.followed}/> )}
      </div>
    </div>
  );
}

export default Subscribers;