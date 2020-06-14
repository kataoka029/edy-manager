import React, { useEffect } from "react";
import "./style.scss";
import LeftColumn from "./LeftColumn";
import CenterContainer from "./CenterColumn";
import RightColumn from "./RightColumn";
import { useDispatch } from "react-redux";

const MessageContainer = (props) => {
  const dispatch = useDispatch();
  const lineUserId = props.match.params.lineUserId;

  useEffect(() => {
    dispatch({
      type: "SET_LINEUSERID",
      lineUserId,
    });
  }, [lineUserId]);

  return (
    <div className="message-container">
      <LeftColumn />
      <CenterContainer />
      <RightColumn />
    </div>
  );
};

export default MessageContainer;
