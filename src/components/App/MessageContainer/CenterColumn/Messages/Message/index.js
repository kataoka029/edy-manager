import React from "react";
import "./style.scss";

const Message = (props) => {
  const className =
    props.message.line_user_type === "user" ? "left-message" : "right-message";
  switch (props.message.line_message_type) {
    case "text":
      return (
        <div className={`message ${className}`}>
          {props.message.line_message_text}
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
