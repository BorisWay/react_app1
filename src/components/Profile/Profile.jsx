import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";

const Profile = () => {
  return ( <div>
      <div>
      <img src="https://image.winudf.com/v2/image/bWUud2FsbHBhcGEubmF0dXJlX3NjcmVlbl8xNV8xNTMyMzc4MTc1XzA3OQ/screen-15.jpg?fakeurl=1&type=.jpg"></img>
      </div>
      <div>
        avatar + description
      </div>   
    <MyPosts />
    </div>
  );
};

export default Profile;
