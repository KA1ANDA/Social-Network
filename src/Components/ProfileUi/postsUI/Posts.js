import React from "react";
import styles from "./posts.module.scss"
import { useGetProfileDataQuery } from "../../../Redux/api";
import Post from "./Post";
import AddPost from "./AddPost/AddPost";

const Posts = () => {

  const {data} = useGetProfileDataQuery()

  return (
    <div>
      {data && <AddPost picture = {data.picture.data.url}/>}     
      <div className={styles.posts}>
        {data && data.posts.data.map(post => post.message && <Post key={post.id}
        message = {post.message}
        url = {data.picture.data.url}
        name = {data.name}
        />)}
      </div>
    </div>
  );
}

export default Posts;