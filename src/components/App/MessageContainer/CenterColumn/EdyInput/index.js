import React from "react";
import "./style.scss";
import { useSelector, useDispatch } from "react-redux";

const EdyInput = () => {
  const dispatch = useDispatch();
  const input = useSelector((state) => state.input);

  const pushMessage = () => {
    const replyEvents = [];
    replyEvents[0] = {
      type: "message",
      replyToken: "_",
      source: {
        userId: "_",
        type: "edy",
      },
      message: {
        id: "_",
        type: "text",
        text: input,
      },
    };
    dispatch({
      type: "ADD_MESSAGE",
      message: {
        line_message_text: input,
        line_user_type: "edy",
      },
    });

    fetch("https://edy-api.herokuapp.com/api/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(replyEvents),
    });
  };

  return (
    <div className="edy-input">
      <div className="menu-bar">
        <a className="mood">
          <span className="material-icons">mood</span>
        </a>
        <a className="attachment">
          <span className="material-icons">attachment</span>
        </a>
        <a className="reply">
          <span className="material-icons" onClick={pushMessage}>
            reply
          </span>
        </a>
      </div>
      <textarea
        className="text"
        placeholder="メッセージを入力"
        onChange={(e) =>
          dispatch({ type: "HANDLE_INPUT", input: e.target.value })
        }
      ></textarea>
    </div>
  );
};

export default EdyInput;
