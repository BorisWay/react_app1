import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
    <div className={s.item}>
      <img src='https://picsum.photos/536/354'></img>
      {props.message}
        <div>
      <span>like {props.like}</span>
      </div>
    </div>
    );
  };

export default Post;