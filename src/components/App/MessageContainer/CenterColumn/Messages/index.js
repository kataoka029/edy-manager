import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./style.scss";

const url =
  process.env.NODE_ENV === "production"
    ? "https://edy-api.herokuapp.com/"
    : "http://localhost:4000/";
console.log("process.env: ", process.env);
console.log("URL: ", url);

// socket.io-clientの設定;
import io from "socket.io-client";
const socket = io.connect(url);

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

  // 最初にmessagesを取得する
  useEffect(() => {
    fetchMessages();
  }, []);

  // 最初にrefetchイベントがサーバーからきたらfetchMessages()をするようにする
  useEffect(() => {
    socket.on("refetch", (data) => {
      console.log(`UID: ${data.event.source.userId}`);
      fetchMessages();
    });
    return () => {
      socket.off("refetch");
    };
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
