import React from "react";
import moment from "moment";

import "./style.scss";

// moment.lang("ja", {
//   weekdaysShort: ["日", "月", "火", "水", "木", "金", "土"],
// });

const Message = (props) => {
  const message = props.message;
  const className =
    message.line_user_type === "user" ? "left-message" : "right-message";
  const m = moment(message.created_at);

  switch (message.line_message_type) {
    case "text":
      return (
        <div className={`message ${className}`}>
          <div className="bubble">{message.content}</div>
          <div className="time">{m.fromNow()}</div>
        </div>
      );

    case "image":
      const imageUrl = props.message.content;
      return (
        <div className={`message ${className}`}>
          <div className="bubble">
            <img src={imageUrl} />
          </div>
          <div className="time">{m.fromNow()}</div>
        </div>
      );

    default:
      return (
        <div className={`message ${className}`}>
          <div className="bubble">{`<${message.line_message_type}>`}</div>
          <div className="time">{m.fromNow()}</div>
        </div>
      );
  }
};

export default Message;
