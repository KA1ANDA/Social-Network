import React, { useEffect } from "react";
import styles from "./user.module.scss"
import { useAddProfilePhotoMutation, useGetProfileInfoQuery } from "../../../Redux/api";
import { useDispatch, useSelector } from "react-redux";
import { addProfilePhoto } from "../../../Redux/Slices/profileSlice";
import {TbPhotoEdit} from "react-icons/tb"



const User = () => {
  const dispatch = useDispatch()

  const {myId ,userId} = useSelector(state => state.authSlice)

  const {data, isLoading, isError} = useGetProfileInfoQuery(userId)


  const [setProfilePhoto] = useAddProfilePhotoMutation()

  // const [selectedFile, setSelectedFile] = useState(null);


  const handleFileInputChange  = (event) => {
    const file = event.target.files[0];
    setProfilePhoto(file);
  };

  
  useEffect(() => {
    if (data) {
      dispatch(addProfilePhoto(data.photos.small));
    }
  }, [data]);

  return (
    <div>
      {data &&
      <div className={styles.user} > 
        <div className={styles.photo}>
          {data.photos.large === null ? <div className={styles.avatarDefault}></div> : <img src={data.photos.large}/>}
        </div>
        {myId === userId &&
          <div className={styles.editPhoto}>
          <label className={styles.custom}>
            <input type="file" id="photo" accept="image/jpeg, image/png" onChange={handleFileInputChange } />
            <TbPhotoEdit />
          </label>
          </div>   
        }
        <div className={styles.name}>
          {data.fullName}
        </div>
      </div>
      }
    </div>
  );
}

export default User;