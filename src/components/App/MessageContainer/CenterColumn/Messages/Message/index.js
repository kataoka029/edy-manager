import React, { useState, useEffect } from "react";
import "./style.scss";
import config from "../../../../../../config";
const url = config.url;

const Message = (props) => {
  const className =
    props.message.line_user_type === "user" ? "left-message" : "right-message";

  const [imgUrl, setImgUrl] = useState("");

  useEffect(() => {
    fetch(`${url}api/messages/${props.message.line_message_id}/image`)
      .then((res) => res.body)
      .then((stream) => new Response(stream))
      .then((response) => response.blob())
      .then((blob) => URL.createObjectURL(blob))
      .then((url) => setImgUrl(url));
  }, []);

  switch (props.message.line_message_type) {
    case "text":
      return (
        <div className={`message ${className}`}>
          {props.message.line_message_text}
        </div>
      );
    case "image":
      return (
        <div className={`message ${className}`}>
          <img src={imgUrl} />
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
