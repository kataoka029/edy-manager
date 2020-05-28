import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./style.scss";
const url = "https://edy-api.herokuapp.com/";

//

// // あるユーザーIDのメッセージを取得する

const listChats = () => {
  const chats = useSelector((state) => state.chats);
  const dispatch = useDispatch();

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
    return (
      <div className="chat" key={`chat${index}`}>
        <div className={className}>{chat.line_message_text}</div>
      </div>
    );
  });
};

const Chats = () => {
  return listChats();
};

export default Chats;

// for (const message of messages) {
//   const div = document.createElement("div");
//   div.classList.add("chat");
//   if (message.line_user_type === "user") {
//     div.classList.add("left-chat");
//   } else {
//     div.classList.add("right-chat");
//   }
//   div.innerHTML = message.line_message_text;
//   messagesContainer.appendChild(div);
// }
