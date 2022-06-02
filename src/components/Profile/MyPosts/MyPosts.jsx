import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post'

const MyPosts = () => {
    return (
    <div>
      My posts
    <div>
      <textarea></textarea>
      <button>Add post</button>
    </div>
    <div className={s.posts}>
      <Post message='Hi, how r u?' like='10' />
      <Post message='Its my 1st post' like='15'/>
    </div>
    </div>
    );
  };

export default MyPosts;