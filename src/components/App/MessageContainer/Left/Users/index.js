import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./style.scss";
import { fetchUsers, readMessagesByUser } from "../../../../../utils";
import User from "./User";

const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const query = useSelector((state) => state.query);
  const userFlg = useSelector((state) => state.userFlg);
  const toCheckFlg = useSelector((state) => state.toCheckFlg);
  const lineUserId = useSelector((state) => state.lineUserId);

  const userFlgResult = userFlg
    ? users.filter((user) => user.first_name !== "_")
    : users;
  const toCheckFlgResult = toCheckFlg
    ? userFlgResult.filter((user) => user.to_check === 1)
    : userFlgResult;

  const regExp = new RegExp(query, "i");

  const queryResult =
    query === ""
      ? toCheckFlgResult
      : toCheckFlgResult.filter(
          (user) =>
            user.user_id.toString().match(regExp) ||
            user.profile_name.match(regExp) ||
            (user.first_name + user.last_name).match(regExp)
        );

  useEffect(() => {
    if (!lineUserId) return fetchUsers(dispatch);
    readMessagesByUser(lineUserId).then(() => fetchUsers(dispatch));
  }, [lineUserId]);

  return (
    <div className="users">
      {queryResult.map((user, index) => {
        return (
          <User
            user={user}
            key={`user${index}`}
            link={`/messages/${user.line_user_id}`}
            selected={lineUserId === user.line_user_id ? true : false}
          />
        );
      })}
    </div>
  );
};

export default Users;
