import React from "react";
import { useSelector, useDispatch } from "react-redux";

import "./style.scss";
import {
  fetchLatestMessages,
  fetchUserMessages,
  toggleToCheck,
} from "../../../../../utils";

const Status = () => {
  const dispatch = useDispatch();
  const latestMessages = useSelector((state) => state.latestMessages);
  const selectedLineUserId = useSelector((state) => state.selectedLineUserId);
  const targetMessage = latestMessages.find(
    (latestMessage) => latestMessage.line_user_id === selectedLineUserId
  );
  const toCheck = targetMessage ? targetMessage.to_check : 0;
  const className = toCheck ? "to-check" : "done";

  return (
    <div className="status">
      <span
        className="material-icons refresh"
        onClick={() => {
          fetchUserMessages(dispatch, selectedLineUserId);
          setTimeout(
            () => fetchUserMessages(dispatch, selectedLineUserId),
            2000
          );
        }}
      >
        refresh
      </span>
      <span
        className={`material-icons ${className}`}
        onClick={() => {
          toggleToCheck(selectedLineUserId).then(() =>
            setTimeout(() => fetchLatestMessages(dispatch), 200)
          );
        }}
      >
        priority_high
      </span>
    </div>
  );
};

export default Status;
