import React from "react";

import "./style.scss";
import Orders from "./Orders";
import Profile from "./Profile";

const Right = () => {
  return (
    <div className="right">
      <Profile />
      <Orders />
    </div>
  );
};

export default Right;
