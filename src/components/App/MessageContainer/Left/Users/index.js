import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./style.scss";
import { fetchUsers, readMessages } from "../../../../../utils";
import User from "./User";

const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const selectedLineUserId = useSelector((state) => state.selectedLineUserId);

  useEffect(() => {
    if (!selectedLineUserId) return fetchUsers(dispatch);
    readMessages(selectedLineUserId).then(() => fetchUsers(dispatch));
  }, [selectedLineUserId]);

  return (
    <div className="users">
      {users.map((user, index) => {
        return (
          <User
            user={user}
            key={`user${index}`}
            link={`/messages/${user.line_user_id}`}
            selected={selectedLineUserId === user.line_user_id ? true : false}
          />
        );
      })}
    </div>
  );
};

export default Users;
