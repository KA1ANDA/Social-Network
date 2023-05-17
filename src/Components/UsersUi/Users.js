import React from "react";
import styles from "./users.module.scss";
import { useGetUsersQuery } from "../../Redux/ApiEndpoints/usersApi";
import Person from "./Person";



const Users = () => {
  const {data,isLoading,isError} = useGetUsersQuery() 



  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error occurred while fetching data.</div>;
  }

  return (
    <div className={styles.users}>
      {data && 
        data.items.map(user => 
        <Person key = {user.id}
        name = {user.name}
        status = {user.status}
        follow = {user.followed}
        photos = {user.photos}
        /> )   
      }

    </div>
  );
}

export default Users;