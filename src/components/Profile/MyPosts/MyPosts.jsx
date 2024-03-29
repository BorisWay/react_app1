import React from "react";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profile-reducer";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";



const MyPosts = (props) => {
  // let posts = [
  //   {id:1, message: "Hi, how r u?", likesCount: 12},
  //   {id:2, message: "it's my 1st post", likesCount: 15}
  // ]

  let postsElements = props.posts.map((p) => (
    <Post message={p.message} like={p.likesCount} />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
      props.dispatch(addPostActionCreator() );
  };

  let onPostChange = () => {
    let text=newPostElement.current.value;
    let action = updateNewPostTextActionCreator(text);
    props.dispatch(action);
  };

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea
            onChange={onPostChange}
            ref={newPostElement}
            value={props.newPostText}
          />
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
