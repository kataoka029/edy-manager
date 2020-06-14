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
        {/* <a href={props.link}> */}
        <p className="user-id">{props.userId}</p>
        <p className="text">{props.userText}</p>
        {/* </a> */}
      </Link>
    </div>
  );
};

export default User;
