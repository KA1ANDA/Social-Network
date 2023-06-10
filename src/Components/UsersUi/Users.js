import React, { useState } from "react";
import styles from "./users.module.scss";
import { useGetUsersQuery } from "../../Redux/ApiEndpoints/usersApi";
import Person from "./Person";
import {CiSearch} from "react-icons/ci";
import {AiOutlineArrowLeft} from "react-icons/ai";
import {AiOutlineArrowRight} from "react-icons/ai";







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
      
      <div className={styles.inputWrapper}>
        <div className={styles.searchInput}>
          <div className={styles.searchIcon}><CiSearch/></div>
          <input placeholder='Search...' onChange={handleInputChange} value={searchValue}></input>
        </div>
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
          <button  onClick={() => setPage(page - 1)} className={page===1 && styles.disabled} disabled={page===1}><AiOutlineArrowLeft/></button>
          <div>{page}</div>
          <button  onClick={() => setPage(page + 1)}  className={!data || data.items.length < 8 && styles.disabled}><AiOutlineArrowRight/></button>
        </div>
      </div>
    </div>
  );
}

export default Users;