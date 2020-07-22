import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import "./style.scss";

const LatestMessage = (props) => {
  const latestMessage = props.latestMessage;
  const unreadCounts = useSelector((state) => state.unreadCounts);
  const unreadCount = unreadCounts[latestMessage.line_user_id];
  const userId = latestMessage.user_id > 0 ? latestMessage.user_id : "non-user";
  const text =
    latestMessage.type !== "text"
      ? `<${latestMessage.type}>`
      : latestMessage.text;
  return (
    <div
      className={props.selected ? "user selected" : "user"}
      data-user-id={latestMessage.userId}
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
          {latestMessage.to_check ? (
            <span className="material-icons to-check">announcement</span>
          ) : (
            <span className="material-icons done">announcement</span>
          )}
        </div>
        <div className="text">{text}</div>
        <div className="line-user-id">{latestMessage.line_user_id}</div>
      </Link>
    </div>
  );
};

export default LatestMessage;
