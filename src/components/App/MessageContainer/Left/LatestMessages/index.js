import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./style.scss";
import { fetchLatestMessages, readMessages } from "../../../../../utils";
import LatestMessage from "./LatestMessage";

const LatestMessages = () => {
  const dispatch = useDispatch();
  const latestMessages = useSelector((state) => state.latestMessages);
  const selectedLineUserId = useSelector((state) => state.selectedLineUserId);

  useEffect(() => {
    if (!selectedLineUserId) return fetchLatestMessages(dispatch);
    readMessages(selectedLineUserId).then(() => fetchLatestMessages(dispatch));
  }, [selectedLineUserId]);

  return (
    <div className="latest-messages">
      {latestMessages.map((latestMessage, index) => {
        return (
          <LatestMessage
            latestMessage={latestMessage}
            key={`latestMessage${index}`}
            link={`/messages/${latestMessage.line_user_id}`}
            selected={
              selectedLineUserId === latestMessage.line_user_id ? true : false
            }
          />
        );
      })}
    </div>
  );
};

export default LatestMessages;
