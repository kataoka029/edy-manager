import React from "react";

import "./style.scss";

const Message = (props) => {
  const message = props.message;
  const className =
    message.line_user_type === "user" ? "left-message" : "right-message";

  switch (message.line_message_type) {
    case "text":
      return <div className={`message ${className}`}>{message.content}</div>;

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
          {`<${message.line_message_type}>`}
        </div>
      );
  }
};

export default Message;
