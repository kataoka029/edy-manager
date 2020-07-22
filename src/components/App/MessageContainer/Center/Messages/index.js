import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./style.scss";
import config from "../../../../../config";
import {
  fetchLatestMessages,
  fetchUserMessages,
  readMessages,
  updateImageUrls,
} from "../../../../../utils";
import Message from "./Message";

import io from "socket.io-client";
const socket = io.connect(config.url);

const updateUserMessages = (dispatch, selectedLineUserId) => {
  updateImageUrls().then(() => {
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
      updateImageUrls().then(() => fetchLatestMessages(dispatch));
    } else {
      updateUserMessages(dispatch, selectedLineUserId);
    }
  }, [selectedLineUserId]);

  useEffect(() => {
    socket.on("refetch", (data) => {
      console.log("UID - ", data.event.source.userId);

      if (selectedLineUserId === data.event.source.userId) {
        updateUserMessages(dispatch, selectedLineUserId);
      } else {
        updateImageUrls().then(() => fetchLatestMessages(dispatch));
      }
      setTimeout(() => updateImageUrls(), 200);
      setTimeout(() => updateImageUrls(), 2000);
    });

    return () => {
      socket.off("refetch");
    };
  }, [selectedLineUserId]);

  return (
    <div className="messages">
      {messages.map((message, index) => (
        <Message message={message} key={`message${index}`} />
      ))}
    </div>
  );
};

export default Messages;
