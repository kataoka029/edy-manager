import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";

const User = (props) => {
  return (
    <div
      className={props.selected ? "user selected" : "user"}
      data-user-id={props.userId}
    >
      <Link to={props.link}>
        <div className="line-user-id">{props.lineUserId}</div>
        <div className="user-id">{props.userId}</div>
        <div className="text">{props.userText}</div>
      </Link>
    </div>
  );
};

export default User;
