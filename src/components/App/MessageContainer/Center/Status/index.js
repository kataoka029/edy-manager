import React from "react";
import { useSelector, useDispatch } from "react-redux";

import "./style.scss";
import { fetchUsers, fetchMessages, toggleToCheck } from "../../../../../utils";

const Status = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const selectedLineUserId = useSelector((state) => state.selectedLineUserId);
  const targetMessage = users.find(
    (user) => user.line_user_id === selectedLineUserId
  );
  const toCheck = targetMessage ? targetMessage.to_check : 0;
  const className = toCheck ? "to-check" : "done";

  return (
    <div className="status">
      <span
        className="material-icons refresh"
        onClick={() => {
          fetchMessages(dispatch, selectedLineUserId);
          setTimeout(() => fetchMessages(dispatch, selectedLineUserId), 2000);
        }}
      >
        refresh
      </span>
      <span
        className={`material-icons ${className}`}
        onClick={() => {
          toggleToCheck(selectedLineUserId).then(() =>
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
