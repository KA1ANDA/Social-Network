import React from "react";
import { useGetProfileDataQuery } from "../../../Redux/api";
import styles from "./userInfo.module.scss"

const UserInfo = () => {

  const {data} = useGetProfileDataQuery()

  return (
    <div className={styles.userInfo}>
      {data &&  
      <div>  
        <div>{data.name}</div>
        <div>
          <img src={data.picture.data.url} />
        </div>  
      </div>}
    </div>
  );
}

export default UserInfo;