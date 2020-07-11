import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import "./style.scss";
import CenterContainer from "./CenterColumn";
import LeftColumn from "./LeftColumn";
import RightColumn from "./RightColumn";

const MessageContainer = (props) => {
  const dispatch = useDispatch();
  const selectedLineUserId = props.match.params.lineUserId;

  useEffect(() => {
    if (!selectedLineUserId) return;
    dispatch({
      type: "SET_LINEUSERID",
      selectedLineUserId,
    });
  }, [selectedLineUserId]);

  return (
    <div className="message-container">
      <LeftColumn />
      <CenterContainer />
      <RightColumn />
    </div>
  );
};

export default MessageContainer;
