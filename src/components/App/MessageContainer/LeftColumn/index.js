import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./style.scss";
import { fetchLatestMessages, readMessages } from "../../../../utils";
import User from "./User";

const LeftColumn = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const selectedLineUserId = useSelector((state) => state.selectedLineUserId);

  useEffect(() => {
    if (!selectedLineUserId) return fetchLatestMessages(dispatch);
    readMessages(selectedLineUserId).then(() => fetchLatestMessages(dispatch));
  }, [selectedLineUserId]);

  return (
    <div className="left-column">
      {users.map((user, index) => {
        return (
          <User
            content={user.content}
            key={`user${index}`}
            link={`/messages/${user.lineUserId}`}
            lineUserId={user.lineUserId}
            messageType={user.messageType}
            selected={selectedLineUserId === user.lineUserId ? true : false}
            userId={user.userId}
          />
        );
      })}
    </div>
  );
};

export default LeftColumn;
