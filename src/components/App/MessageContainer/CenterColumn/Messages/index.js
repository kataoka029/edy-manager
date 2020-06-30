import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Message from "./Message";
import config from "../../../../../config";
import "./style.scss";

import { fetchMessages, fetchUsers, readMessages } from "../../../../../utils";

// socket.io-clientの設定;
import io from "socket.io-client";
const socket = io.connect(config.url);

const Messages = () => {
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.messages);
  const selectedLineUserId = useSelector((state) => state.selectedLineUserId);

  useEffect(() => {
    if (!selectedLineUserId) return;
    readMessages(selectedLineUserId).then(() => {
      fetchMessages(dispatch, selectedLineUserId).then(() =>
        fetchUsers(dispatch)
      );
    });
  }, [selectedLineUserId]);

  useEffect(() => {
    if (!selectedLineUserId) return;
    socket.on("refetch", (data) => {
      console.log("UID - ", data.event.source.userId);
      readMessages(selectedLineUserId).then(() => {
        fetchMessages(dispatch, selectedLineUserId).then(() =>
          fetchUsers(dispatch)
        );
      });
    });
    return () => {
      socket.off("refetch");
    };
  }, [selectedLineUserId]);

  return messages.map((message, index) => (
    <Message message={message} key={`message${index}`} />
  ));
};

export default Messages;
