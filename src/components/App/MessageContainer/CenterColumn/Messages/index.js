import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Message from "./Message";
import "./style.scss";

const url =
  process.env.NODE_ENV === "production"
    ? "https://edy-api.herokuapp.com/"
    : "http://localhost:4000/";

// socket.io-clientの設定;
import io from "socket.io-client";
const socket = io.connect(url);

const Messages = () => {
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.messages);
  const userId = useSelector((state) => state.userId);

  const fetchMessages = () => {
    fetch(`${url}api/messages/${userId}`)
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: "SET_MESSAGES",
          messages: data,
        });
      })
      .catch((err) => console.log(err));
  };

  // 最初にmessagesを取得する
  useEffect(() => {
    fetchMessages();
  }, [userId]);

  // 最初にrefetchイベントがサーバーからきたらfetchMessages()をするようにする
  useEffect(() => {
    socket.on("refetch", (data) => {
      console.log(`UID: ${data.event.source.userId}`);
      fetchMessages();
    });
    return () => {
      socket.off("refetch");
    };
  }, [userId]);

  return messages.map((message, index) => (
    <Message message={message} key={`message${index}`} />
  ));
};

export default Messages;
