import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./style.scss";
import { fetchLatestMessages, toggleToCheck } from "../../../../../utils";

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
      <span className="material-icons refresh">refresh</span>
      <span
        className={`material-icons ${className}`}
        onClick={() => {
          toggleToCheck(selectedLineUserId);
          setTimeout(() => fetchLatestMessages(dispatch), 1000);
        }}
      >
        priority_high
      </span>
    </div>
  );
};

export default Status;
