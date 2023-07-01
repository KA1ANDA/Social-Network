import React from "react";
import styles from "./onlineUser.module.scss"
import { useDispatch } from "react-redux";
import { setUserId } from "../../../Redux/Slices/authSlice";
import { NavLink } from "react-router-dom";
import { setTitle } from "../../../Redux/Slices/headerSlice";


const OnlineUser = ({personId , name , photo}) => {

  const dispatch = useDispatch()
  const setId = () => dispatch(setUserId(personId))


  const handleTitleChange = (title) =>{
    dispatch(setTitle(title))

  }



  return (
    < NavLink to={`/profile`} onClick={() => handleTitleChange('User Profile')} >
      <div className={styles.onlineUser} onClick={setId}>
          <div className={styles.photo}>
            <img src={photo} className={`${!photo && styles.default}`}/>
          </div>
        
          <div className={styles.name}>
            {name}
          </div>
      </div>
    </NavLink>
    
  );
}

export default OnlineUser;