import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import "./style.scss";

const User = (props) => {
  const user = props.user;
  const unreadCounts = useSelector((state) => state.unreadCounts);
  const unreadCount = unreadCounts[user.lineUserId];
  const userId = user.userId > 0 ? user.userId : "non-user";
  const content =
    user.messageType !== "text" ? `<${user.messageType}>` : user.content;

  return (
    <div
      className={props.selected ? "user selected" : "user"}
      data-user-id={user.userId}
    >
      <Link to={props.link}>
        <div className="header">
          <span className="material-icons account">account_circle</span>
          <span className="user-id">{userId}</span>
          {unreadCount > 0 ? (
            <span className="material-icons unread">mark_chat_unread</span>
          ) : (
            <span className="material-icons read">mark_chat_read</span>
          )}
          {false ? (
            <span className="material-icons todo">warning</span>
          ) : (
            <span className="material-icons done">done</span>
          )}
        </div>
        <div className="text">{content}</div>
        <div className="line-user-id">{user.lineUserId}</div>
      </Link>
    </div>
  );
};

export default User;
