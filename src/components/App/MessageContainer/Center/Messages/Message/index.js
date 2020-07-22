import React from "react";
import moment from "moment";

import "./style.scss";

const Message = (props) => {
  const message = props.message;
  const className =
    message.line_message_id === "_" ? "right-message" : "left-message";
  const m = moment(message.created_at);

  switch (message.type) {
    case "text":
      return (
        <div className={`message ${className}`}>
          <div className="bubble">{message.text}</div>
          <div className="time">{m.fromNow()}</div>
        </div>
      );

    case "image":
      const imageUrl = props.message.image_url;
      return (
        <div className={`message ${className}`}>
          <div className="bubble">
            {imageUrl === "_" ? (
              <div class="loader">Loading...</div>
            ) : (
              <img src={imageUrl} />
            )}
          </div>
          <div className="time">{m.fromNow()}</div>
        </div>
      );

    default:
      return (
        <div className={`message ${className}`}>
          <div className="bubble">{`<${message.type}>`}</div>
          <div className="time">{m.fromNow()}</div>
        </div>
      );
  }
};

export default Message;
