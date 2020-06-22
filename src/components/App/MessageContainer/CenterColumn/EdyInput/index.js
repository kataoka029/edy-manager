import React from "react";
import "./style.scss";
import { useSelector, useDispatch } from "react-redux";

import {
  fetchUsers,
  fetchMessages,
  createPushMessage,
  insertMessage,
  sendMessage,
  readMessages,
} from "../../../../../utils";

const EdyInput = () => {
  const dispatch = useDispatch();
  const input = useSelector((state) => state.input);
  const selectedLineUserId = useSelector((state) => state.selectedLineUserId);

  const pushMessage = async () => {
    const events = createPushMessage(input, selectedLineUserId);
    sendMessage(events, selectedLineUserId);
    await insertMessage(events);
    readMessages(selectedLineUserId);
    await fetchMessages(dispatch, selectedLineUserId);
    fetchUsers(dispatch);
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
