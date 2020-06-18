import React from "react";
import "./style.scss";
import { useSelector, useDispatch } from "react-redux";

import {
  fetchUsers,
  fetchMessages,
  createPushMessage,
  insertMessage,
  sendMessage,
} from "../../../../../utils";

const EdyInput = () => {
  const dispatch = useDispatch();
  const input = useSelector((state) => state.input);
  const lineUserId = useSelector((state) => state.lineUserId);

  const pushMessage = async () => {
    const events = createPushMessage(input, lineUserId);
    await insertMessage(events);
    fetchUsers(dispatch);
    fetchMessages(dispatch, lineUserId);
    sendMessage(events, lineUserId);
    document.querySelector("textarea.text").value = "";
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
        onKeyDown={(e) => {
          if (e.keyCode === 13 && !e.shiftKey && !e.metaKey) {
            e.preventDefault();
            document.querySelector("a.reply span").click();
          }
        }}
      ></textarea>
    </div>
  );
};

export default EdyInput;
