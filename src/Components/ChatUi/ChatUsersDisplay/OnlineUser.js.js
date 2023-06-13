import React from "react";
import styles from "./onlineUser.module.scss"
import { useDispatch } from "react-redux";
import { setUserId } from "../../../Redux/Slices/authSlice";
import { NavLink } from "react-router-dom";


const OnlineUser = ({personId , name , photo}) => {

  const dispatch = useDispatch()
  const setId = () => dispatch(setUserId(personId))



  return (
    < NavLink to={`/profile`}  >
      <div className={styles.onlineUser} onClick={setId}>
          <div className={styles.photo}>
            <img src={photo} />
          </div>
        
          <div className={styles.name}>
            {name}
          </div>
      </div>
    </NavLink>
    
  );
}

export default OnlineUser;