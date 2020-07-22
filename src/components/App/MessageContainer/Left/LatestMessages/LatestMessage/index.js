import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import "./style.scss";

const LatestMessage = (props) => {
  const latestMessage = props.latestMessage;
  const userClass = latestMessage.first_name !== "_" ? "user" : "non-user";
  const unreadCounts = useSelector((state) => state.unreadCounts);
  const unreadCount = unreadCounts[latestMessage.line_user_id];
  const userName =
    latestMessage.first_name !== "_"
      ? `${latestMessage.first_name} ${latestMessage.last_name}`
      : latestMessage.profile_name;
  const text =
    latestMessage.type !== "text"
      ? `<${latestMessage.type}>`
      : latestMessage.text;

  return (
    <div
      className={props.selected ? "latest-message selected" : "latest-message"}
      data-user-id={latestMessage.userId}
    >
      <Link to={props.link}>
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
              latestMessage.to_check
                ? "material-icons to-check"
                : "material-icons done"
            }
          >
            announcement
          </span>
        </div>
        <div className="text">{text}</div>
        <div className="line-user-id">{latestMessage.line_user_id}</div>
      </Link>
    </div>
  );
};

export default LatestMessage;
