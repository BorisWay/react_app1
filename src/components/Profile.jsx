import React from 'react';
import s from './Profile.module.css';

const Profile = () => {
    return <div className={s.content}>
    <img src='https://image.winudf.com/v2/image/bWUud2FsbHBhcGEubmF0dXJlX3NjcmVlbl8xNV8xNTMyMzc4MTc1XzA3OQ/screen-15.jpg?fakeurl=1&type=.jpg'></img>  
  <div>
    avatar + description
  </div>
  <div>
    My posts
    <div>
      New post
    </div>
    <div className={s.posts}>
    <div className={s.item}>
      post 1
    </div>
    <div className={s.item}>
      post 2
    </div>
    </div>
  </div>
  </div>
}

export default Profile;