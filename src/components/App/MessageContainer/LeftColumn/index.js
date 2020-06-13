import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import User from "./User";
import "./style.scss";

const url =
  process.env.NODE_ENV === "production"
    ? "https://edy-api.herokuapp.com/"
    : "http://localhost:4000/";

const LeftColumn = () => {
  // const dispatch = useDispatch();
  // const users = useSelector((state) => state.users);
  const userId = useSelector((state) => state.userId);

  // const fetchUsers = () => {
  //   fetch(`${url}api/users/`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       dispatch({
  //         type: "SET_USERS",
  //         messages: users,
  //       });
  //     });
  // };

  const users = [
    {
      userId: 1,
      selected: false,
      // lastMessage: "hello, this is last message of user 1",
    },
    {
      userId: 2,
      selected: false,
      // lastMessage: "hello, this is last message of user 2",
    },
    {
      userId: 3,
      selected: false,
      // lastMessage: "hello, this is last message of user 3",
    },
  ];

  return (
    <div className="left-column">
      {users.map((user, index) => {
        return (
          <User
            link={`/messages/${user.userId}`}
            userId={user.userId}
            selected={user.selected}
            key={`user${index}`}
          />
        );
      })}
    </div>
  );
};

export default LeftColumn;
