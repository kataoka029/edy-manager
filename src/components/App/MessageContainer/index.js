import React from "react";
import "./style.scss";
import LeftColumn from "./LeftColumn";
import CenterContainer from "./CenterColumn";
import RightColumn from "./RightColumn";

const MessageContainer = () => {
  return (
    <div className="message-container">
      <LeftColumn />
      <CenterContainer />
      <RightColumn />
    </div>
  );
};

export default MessageContainer;
