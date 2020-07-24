import React from "react";
import { useDispatch, useSelector } from "react-redux";

import "./style.scss";
import {
  createPushMessages,
  fetchUsers,
  fetchMessages,
  insertMessages,
  readMessages,
  sendMessages,
} from "../../../../../utils";

const EdyInput = () => {
  const dispatch = useDispatch();
  const input = useSelector((state) => state.input);
  const selectedLineUserId = useSelector((state) => state.selectedLineUserId);

  const pushMessage = async () => {
    if (!input) return alert("メッセージを入力してください。");
    const events = createPushMessages(input, selectedLineUserId);
    sendMessages(events, selectedLineUserId);
    await insertMessages(events);
    readMessages(selectedLineUserId);
    await fetchMessages(dispatch, selectedLineUserId);
    fetchUsers(dispatch);
    document.querySelector("textarea.text").value = "";
    dispatch({ type: "SET_INPUT", input: "" });
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
        onChange={(e) => dispatch({ type: "SET_INPUT", input: e.target.value })}
        onKeyDown={(e) => {
          if (e.keyCode === 13 && !e.shiftKey && !e.metaKey) {
            e.preventDefault();
            document.querySelector("a.reply span").click();
          }
        }}
        placeholder="メッセージを入力（「shift」+「enter」で改行）"
      ></textarea>
    </div>
  );
};

export default EdyInput;
