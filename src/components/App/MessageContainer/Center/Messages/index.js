import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./style.scss";
import config from "../../../../../config";
import {
  fetchOrdersByUser,
  fetchUser,
  fetchUsers,
  fetchMessagesByUser,
  readMessagesByUser,
  updateImageUrls,
} from "../../../../../utils";
import Message from "./Message";

import io from "socket.io-client";
const socket = io.connect(config.url);

const updateUserMessages = (dispatch, lineUserId) => {
  updateImageUrls().then(() => {
    readMessagesByUser(lineUserId).then(() => {
      fetchMessagesByUser(dispatch, lineUserId).then(() => {
        fetchOrdersByUser(dispatch, lineUserId);
        fetchUser(dispatch, lineUserId);
        fetchUsers(dispatch);
      });
    });
  });
};

const Messages = () => {
  const dispatch = useDispatch();
  const messagesByUser = useSelector((state) => state.messagesByUser);
  const lineUserId = useSelector((state) => state.lineUserId);

  useEffect(() => {
    if (!lineUserId) {
      updateImageUrls().then(() => fetchUsers(dispatch));
    } else {
      updateUserMessages(dispatch, lineUserId);
    }
  }, [lineUserId]);

  useEffect(() => {
    socket.on("refetch", (data) => {
      console.log("UID - ", data.event.source.userId);

      if (lineUserId === data.event.source.userId) {
        updateUserMessages(dispatch, lineUserId);
      } else {
        updateImageUrls().then(() => fetchUsers(dispatch));
      }
      setTimeout(() => updateImageUrls(), 200);
      setTimeout(() => updateImageUrls(), 2000);
    });

    return () => {
      socket.off("refetch");
    };
  }, [lineUserId]);

  return (
    <div className="messages">
      {messagesByUser.map((message, index) => (
        <Message message={message} key={`message${index}`} />
      ))}
    </div>
  );
};

export default Messages;
