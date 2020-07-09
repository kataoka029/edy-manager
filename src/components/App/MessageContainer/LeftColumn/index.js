import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import User from "./User";
import "./style.scss";
import { fetchLatestMessages, readMessages } from "../../../../utils";

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
            link={`/messages/${user.lineUserId}`}
            messageType={user.messageType}
            lineUserId={user.lineUserId}
            userId={user.userId}
            content={user.content}
            selected={selectedLineUserId === user.lineUserId ? true : false}
            key={`user${index}`}
          />
        );
      })}
    </div>
  );
};

export default LeftColumn;
