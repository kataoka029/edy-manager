import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./style.scss";
const url = "https://edy-api.herokuapp.com/";

const Chats = () => {
  const dispatch = useDispatch();
  const chats = useSelector((state) => state.chats);

  fetch(`${url}/api/messages?u=1`)
    .then((res) => res.json())
    .then((data) => {
      dispatch({
        type: "SET_CHATS",
        chats: data,
      });
    });

  return chats.map((chat, index) => {
    console.log(chat);
    const className =
      chat.line_user_type === "user" ? "left-chat" : "right-chat";
    return <div className={`chat ${className}`}>{chat.line_message_text}</div>;
  });
};

export default Chats;
