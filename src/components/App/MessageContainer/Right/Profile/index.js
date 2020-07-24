import React from "react";
import { useSelector } from "react-redux";

import "./style.scss";

const Profile = () => {
  const user = useSelector((state) => state.user);
  const imageUrl =
    user.image_url ||
    "https://icon-library.com/images/anonymous-female-icon/anonymous-female-icon-11.jpg";
  const userName =
    user.first_name === "_"
      ? "non-user"
      : `${user.id} ${user.first_name} ${user.last_name}`;
  const email = user.email === "_" ? "-" : user.email;

  return (
    <div className="profile">
      <div className="profile-image">
        <img src={imageUrl} />
      </div>
      <div className="profile-text">
        <div className="name">{userName}</div>
        <div className="profile-name">{user.profile_name}</div>
        <div className="email">{email}</div>
      </div>
    </div>
  );
};

export default Profile;
