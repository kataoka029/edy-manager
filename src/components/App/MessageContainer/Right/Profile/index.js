import React from "react";
import { useSelector } from "react-redux";

import "./style.scss";

const Profile = () => {
  const users = useSelector((state) => state.users);
  console.log(users[0]);

  return (
    <div className="profile">
      <div>画像</div>
      <div>名前</div>
    </div>
  );
};

export default Profile;
