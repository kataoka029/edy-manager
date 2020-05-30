import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./style.scss";
const url = "https://ccee4f3076b5.ngrok.io/";

// socket.io-clientの設定;
import io from "socket.io-client";
const socket = io.connect("http://localhost:4000/");

const Messages = () => {
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.messages);

  const fetchMessages = () => {
    fetch(`${url}api/messages?u=1`)
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: "SET_MESSAGES",
          messages: data,
        });
      });
  };

  socket.on("refetch", (data) => {
    console.log(`Message from line-use-id: "${data.event.source.userId}"`);
    fetchMessages();
  });

  useEffect(() => {
    fetchMessages();
  }, []);

  return messages.map((message, index) => {
    const className =
      message.line_user_type === "user" ? "left-message" : "right-message";
    return (
      <div className={`message ${className}`} key={`message${index}`}>
        {message.line_message_text}
      </div>
    );
  });
};

export default Messages;
