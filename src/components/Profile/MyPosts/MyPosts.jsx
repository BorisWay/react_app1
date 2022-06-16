import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {

  // let posts = [
  //   {id:1, message: "Hi, how r u?", likesCount: 12},
  //   {id:2, message: "it's my 1st post", likesCount: 15}
  // ]
  
  let postsElements = props.posts.map((p => <Post message={p.message} like={p.likesCount} />))

  let newPostElement = React.createRef();

  let addPost = () =>{
    let text=newPostElement.current.value;
    props.addPost(text);
  }

    return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
    <div>
      <div>
          <textarea ref={newPostElement}></textarea>
      </div>
      <div>
      <button onClick={addPost}>Add post</button>
      </div>
    </div>
    <div className={s.posts}>
      {postsElements}
    </div>
    </div>
    );
  };

export default MyPosts;