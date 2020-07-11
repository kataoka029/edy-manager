import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Message from "./Message";
import config from "../../../../../config";
import "./style.scss";

import {
  fetchUserMessages,
  fetchLatestMessages,
  readMessages,
  updateContents,
} from "../../../../../utils";

// socket.io-clientの設定;
import io from "socket.io-client";
const socket = io.connect(config.url);

const Messages = () => {
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.messages);
  const selectedLineUserId = useSelector((state) => state.selectedLineUserId);

  useEffect(() => {
    if (!selectedLineUserId) return;
    updateContents(selectedLineUserId).then(() => {
      readMessages(selectedLineUserId).then(() => {
        fetchUserMessages(dispatch, selectedLineUserId).then(() =>
          fetchLatestMessages(dispatch)
        );
      });
    });
  }, [selectedLineUserId]);

  useEffect(() => {
    if (!selectedLineUserId) return;
    socket.on("refetch", (data) => {
      console.log("UID - ", data.event.source.userId);
      updateContents(selectedLineUserId).then(() => {
        readMessages(selectedLineUserId).then(() => {
          fetchUserMessages(dispatch, selectedLineUserId).then(() =>
            fetchLatestMessages(dispatch)
          );
        });
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
