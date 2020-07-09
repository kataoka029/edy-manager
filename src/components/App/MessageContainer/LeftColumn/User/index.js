import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const User = (props) => {
  const unreadCounts = useSelector((state) => state.unreadCounts);
  const unreadCount = unreadCounts[props.lineUserId];
  const userId = props.userId > 0 ? props.userId : "non-user";
  const content =
    props.messageType !== "text" ? `<${props.messageType}>` : props.content;

  return (
    <div
      className={props.selected ? "user selected" : "user"}
      data-user-id={props.userId}
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
        <div className="line-user-id">{props.lineUserId}</div>
      </Link>
    </div>
  );
};

export default User;
