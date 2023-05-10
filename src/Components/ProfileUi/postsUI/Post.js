import React from "react";
import styles from "./post.module.scss"


const Post = ({message , url , name}) => {
  return (
    <div className={styles.post}>
      <div>
        <div>
          <img src={url} />
        </div>
        <div>
          {name}
        </div>
      </div>
      {message}
    </div>
  );
}

export default Post;