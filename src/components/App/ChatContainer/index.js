import React from "react";
import "./style.scss";
import LeftColumn from "./LeftColumn";
import CenterContainer from "./CenterColumn";
import RightColumn from "./RightColumn";

const ChatContainer = () => {
  return (
    <div className="chat-container">
      <LeftColumn />
      <CenterContainer />
      <RightColumn />
    </div>
  );
};

export default ChatContainer;
