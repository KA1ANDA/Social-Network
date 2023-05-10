import React, { useState } from "react";
import styles from "./addPost.module.scss"
import { useAddPostMutation } from "../../../../Redux/api";


const AddPost = ({picture}) => {

  const [postValue , setPostValue] = useState('')
  console.log(postValue)

  const [createPost, { error }] = useAddPostMutation()

  

  const changeValue = (event) =>{
    setPostValue(event.target.value)
  };

  const handleCreatePost = async () => {
    const post = {
      message: 'Привет, мир! Это мой новый пост на профиле.',
    };

    try {
      await createPost(post);
      console.log('Пост успешно отправлен');
    } catch (error) {
      console.error('Ошибка при отправке поста:', error);
    }
  };

  if (error) {
    console.log("Error adding post:", error);
  }

  return (
    <div className={styles.addPost}>
      <div>
        <img src={picture}/>
        <input placeholder="What's on your mind?" onChange={changeValue} value={postValue}></input>
      </div>
      <div>
        <button onClick={handleCreatePost}>add post</button>
      </div>
    </div>
  );
}

export default AddPost;