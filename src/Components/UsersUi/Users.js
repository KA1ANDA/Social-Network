import React, { useState } from "react";
import styles from "./users.module.scss";
import { useGetUsersQuery } from "../../Redux/ApiEndpoints/usersApi";
import Person from "./Person";



const Users = () => {
  const [page, setPage] = useState(1)
  const [searchValue, setSearchValue] = useState('')

  
  const params = {
    webPage:page,
    userNameValue:searchValue
  }

  const {data,isLoading,isError} = useGetUsersQuery(params) 


  const handleInputChange = (event) => {
    setSearchValue(event.target.value)
  }



  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error occurred while fetching data.</div>;
  }

  return (
    <div className={styles.users}>

      <div className={styles.searchUser}>
        <input onChange={handleInputChange} value={searchValue}></input>
        <button>search</button>
      </div>

      <div className={styles.usersWrapper}>
      {data && 
        data.items.map(user => 
        <Person key = {user.id}
        id={user.id}
        name = {user.name}
        status = {user.status}
        follow = {user.followed}
        loading = {isLoading}
        photos = {user.photos}
        /> )   
      }
      </div>
      <div className={styles.pagination}>
        <div className={styles.pages}>
          <button  onClick={() => setPage(page - 1)}  disabled={page===1}>left</button>
          <div>{page}</div>
          <button  onClick={() => setPage(page + 1)}   disabled={!data || data.items.length < 8}>right</button>
        </div>
      </div>
    </div>
  );
}

export default Users;