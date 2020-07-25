import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import "./style.scss";

const User = (props) => {
  const user = props.user;
  const unreadCounts = useSelector((state) => state.unreadCounts);
  const unreadCount = unreadCounts[user.line_user_id];

  const userClass = user.first_name !== "_" ? "user" : "non-user";
  const userName =
    user.first_name !== "_"
      ? `${user.user_id} ${user.first_name}${user.last_name}`
      : `${user.user_id} ${user.profile_name}`;
  const text = user.text_type !== "text" ? `<${user.text_type}>` : user.text;

  return (
    <Link to={props.link}>
      <div className={props.selected ? "user selected" : "user"}>
        <div className="header">
          <span className={`material-icons ${userClass}`}>account_circle</span>
          <span className="user-name">{userName}</span>
          {unreadCount > 0 ? (
            <span className="material-icons unread">mark_chat_unread</span>
          ) : (
            <span className="material-icons read">mark_chat_read</span>
          )}
          <span
            className={
              user.to_check ? "material-icons to-check" : "material-icons done"
            }
          >
            announcement
          </span>
        </div>
        <div className="text">{text}</div>
        <div className="line-user-id">{user.line_user_id}</div>
      </div>
    </Link>
  );
};

export default User;
