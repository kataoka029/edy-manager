import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import "./style.scss";
import Center from "./Center";
import Left from "./Left";
import Right from "./Right";

const MessageContainer = (props) => {
  const dispatch = useDispatch();
  const lineUserId = props.match.params.lineUserId;

  useEffect(() => {
    if (!lineUserId) return;
    dispatch({
      type: "SET_LINEUSERID",
      lineUserId,
    });
  }, [lineUserId]);

  return (
    <div className="message-container">
      <Left />
      <Center />
      <Right />
    </div>
  );
};

export default MessageContainer;
