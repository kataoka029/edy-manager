import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Message from "./Message";
import config from "../../../../../config";
import "./style.scss";

import { fetchMessages, fetchUsers } from "../../../../../utils";

const url =
  process.env.NODE_ENV === "production"
    ? "https://edy-bot.herokuapp.com/"
    : "http://localhost:4000/";

// socket.io-clientの設定;
import io from "socket.io-client";
const socket = io.connect(config.url);

const Messages = () => {
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.messages);
  const lineUserId = useSelector((state) => state.lineUserId);

  // [lineUserId]は必須
  useEffect(() => {
    fetchMessages(dispatch, lineUserId);
  }, [lineUserId]);

  // [lineUserId]
  useEffect(() => {
    socket.on("refetch", (data) => {
      console.log(`UID: ${data.event.source.userId}`);
      fetchMessages(dispatch, lineUserId);
      fetchUsers(dispatch);
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
