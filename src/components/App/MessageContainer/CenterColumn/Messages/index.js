import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./style.scss";
import config from "../../../../../config";
import {
  fetchLatestMessages,
  fetchUserMessages,
  readMessages,
  updateContents,
} from "../../../../../utils";
import Message from "./Message";

import io from "socket.io-client";
const socket = io.connect(config.url);

const updateUserMessages = (dispatch, selectedLineUserId) => {
  updateContents().then(() => {
    readMessages(selectedLineUserId).then(() => {
      fetchUserMessages(dispatch, selectedLineUserId).then(() =>
        fetchLatestMessages(dispatch)
      );
    });
  });
};

const Messages = () => {
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.messages);
  const selectedLineUserId = useSelector((state) => state.selectedLineUserId);

  useEffect(() => {
    if (!selectedLineUserId) {
      updateContents().then(() => fetchLatestMessages(dispatch));
    } else {
      updateUserMessages(dispatch, selectedLineUserId);
    }
  }, [selectedLineUserId]);

  useEffect(() => {
    socket.on("refetch", (data) => {
      console.log("UID - ", data.event.source.userId);
      updateUserMessages(dispatch, selectedLineUserId);
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
