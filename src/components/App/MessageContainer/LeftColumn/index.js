import React from "react";
import "./style.scss";
import User from "./User";

const LeftColumn = () => {
  return (
    <div className="left-column">
      <User link="/messages/1" />
      <User link="/messages/2" />
    </div>
  );
};

export default LeftColumn;
