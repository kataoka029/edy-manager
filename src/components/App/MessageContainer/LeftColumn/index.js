import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import User from "./User";
import "./style.scss";
import { fetchUsers } from "../../../../utils";

const LeftColumn = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const selectedLineUserId = useSelector((state) => state.selectedLineUserId);

  useEffect(() => {
    fetchUsers(dispatch);
  }, []);

  return (
    <div className="left-column">
      {users.map((user, index) => {
        return (
          <User
            link={`/messages/${user.lineUserId}`}
            lineUserId={user.lineUserId}
            userId={user.userId}
            userText={user.userText}
            selected={selectedLineUserId === user.lineUserId ? true : false}
            key={`user${index}`}
          />
        );
      })}
    </div>
  );
};

export default LeftColumn;
