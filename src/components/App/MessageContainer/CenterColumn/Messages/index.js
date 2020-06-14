import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Message from "./Message";
import "./style.scss";

const url =
  process.env.NODE_ENV === "production"
    ? "https://edy-bot.herokuapp.com/"
    : "http://localhost:4000/";

// socket.io-clientの設定;
import io from "socket.io-client";
const socket = io.connect(url);

const Messages = () => {
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.messages);
  const lineUserId = useSelector((state) => state.lineUserId);

  const fetchMessages = () => {
    fetch(`${url}api/messages/${lineUserId}`)
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: "SET_MESSAGES",
          messages: data,
        });
      })
      .catch((err) => console.log(err));
  };

  // LeftColumn/index.jsと被るけどしかたないか
  const fetchUsers = () => {
    fetch(`${url}api/users/`)
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: "SET_USERS",
          users: data,
        });
      });
  };

  // 最初にmessagesを取得する
  useEffect(() => {
    fetchMessages();
  }, [lineUserId]);

  // 最初にrefetchイベントがサーバーからきたらfetchMessages()をするようにする
  useEffect(() => {
    socket.on("refetch", (data) => {
      console.log(`UID: ${data.event.source.userId}`);
      fetchMessages();
      fetchUsers();
    });
    return () => {
      socket.off("refetch");
    };
  }, [lineUserId]);

  return messages.map((message, index) => (
    <Message message={message} key={`message${index}`} />
  ));
};

export default Messages;
