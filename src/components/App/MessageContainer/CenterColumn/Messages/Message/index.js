import React from "react";
import "./style.scss";

const Message = (props) => {
  const className =
    props.message.line_user_type === "user" ? "left-message" : "right-message";
  return (
    <div className={`message ${className}`}>
      {props.message.line_message_text}
    </div>
  );
};

export default Message;
