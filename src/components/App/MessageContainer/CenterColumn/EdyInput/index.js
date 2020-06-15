import React from "react";
import "./style.scss";
import { useSelector, useDispatch } from "react-redux";

// import config from "../../../../../config";
import { insertMessage, fetchMessages, fetchUsers } from "../../../../../utils";

const EdyInput = () => {
  const dispatch = useDispatch();
  const input = useSelector((state) => state.input);
  const lineUserId = useSelector((state) => state.lineUserId);

  const pushMessage = async () => {
    const events = [];
    events[0] = {
      type: "message",
      replyToken: "_",
      source: {
        userId: lineUserId,
        type: "edy",
      },
      message: {
        id: "_",
        type: "text",
        text: input,
      },
    };

    // DBに入れる
    await insertMessage(events);

    // users&messagesを更新する
    fetchUsers(dispatch);
    fetchMessages(dispatch, lineUserId);

    // LINEに送る
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
