import React, { useState, useEffect } from "react";
import "./style.scss";
import config from "../../../../../../config";
const url = config.url;

const Message = (props) => {
  const className =
    props.message.line_user_type === "user" ? "left-message" : "right-message";

  switch (props.message.line_message_type) {
    case "text":
      return (
        <div className={`message ${className}`}>{props.message.content}</div>
      );
    case "image":
      const imageUrl = props.message.content;
      return (
        <div className={`message ${className}`}>
          <img src={imageUrl} />
        </div>
      );
    default:
      return (
        <div className={`message ${className}`}>
          {`<${props.message.line_message_type}>`}
        </div>
      );
  }
};

export default Message;
