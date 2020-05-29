import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./style.scss";
const url = "https://edy-api.herokuapp.com/";

const Messages = () => {
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.messages);

  useEffect(() => {
    fetch(`${url}/api/messages?u=1`)
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: "SET_MESSAGES",
          messages: data,
        });
        // console.log(data);
      });
  }, []);

  return messages.map((message, index) => {
    const className =
      message.line_user_type === "user" ? "left-message" : "right-message";
    return (
      <div className={`message ${className}`} key={`message${index}`}>
        {message.line_message_text}
      </div>
    );
  });
};

export default Messages;
