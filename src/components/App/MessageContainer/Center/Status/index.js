import React from "react";
import { useSelector, useDispatch } from "react-redux";

import "./style.scss";
import {
  fetchMessagesByUser,
  fetchUsers,
  toggleToCheckByUser,
} from "../../../../../utils";

const Status = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const lineUserId = useSelector((state) => state.lineUserId);
  const targetMessage = users.find((user) => user.line_user_id === lineUserId);
  const toCheck = targetMessage ? targetMessage.to_check : 0;
  const className = toCheck ? "to-check" : "done";

  return (
    <div className="status">
      <span
        className="material-icons refresh"
        onClick={() => {
          fetchMessagesByUser(dispatch, lineUserId);
          setTimeout(() => fetchMessagesByUser(dispatch, lineUserId), 2000);
        }}
      >
        refresh
      </span>
      <span
        className={`material-icons ${className}`}
        onClick={() => {
          toggleToCheckByUser(lineUserId).then(() =>
            setTimeout(() => fetchUsers(dispatch), 200)
          );
        }}
      >
        error
      </span>
    </div>
  );
};

export default Status;
