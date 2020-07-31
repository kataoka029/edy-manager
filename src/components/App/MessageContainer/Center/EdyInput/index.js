import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./style.scss";
import {
  createPushMessages,
  fetchMessagesByUser,
  fetchUsers,
  insertMessages,
  readMessagesByUser,
  sendMessages,
} from "../../../../../utils";

const EdyInput = () => {
  const dispatch = useDispatch();
  const lineUserId = useSelector((state) => state.lineUserId);

  const [messageToPush, setMessageToPush] = useState("");

  const pushMessage = async () => {
    if (!messageToPush) return alert("メッセージを入力してください。");
    const events = createPushMessages(messageToPush, lineUserId);
    sendMessages(events, lineUserId);
    await insertMessages(events);
    readMessagesByUser(lineUserId);
    await fetchMessagesByUser(dispatch, lineUserId);
    fetchUsers(dispatch);
    document.querySelector("textarea.text").value = "";
    setMessageToPush("");
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
        onChange={(e) => setMessageToPush(e.target.value)}
        onKeyDown={(e) => {
          if (e.keyCode === 13 && !e.shiftKey && !e.metaKey) {
            e.preventDefault();
            document.querySelector("a.reply span").click();
          }
        }}
        placeholder="メッセージを入力（「shift」+「enter」で改行）"
        value={messageToPush}
      ></textarea>
    </div>
  );
};

export default EdyInput;
