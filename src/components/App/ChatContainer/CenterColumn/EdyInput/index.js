import React from "react";
import "./style.scss";

const EdyInput = () => {
  return (
    <div>
      <h1>this is edyinput!!</h1>
      <div className="edy-input">
        <div className="menu-bar">
          <a className="mood">
            <span className="material-icons">mood</span>
          </a>
          <a className="attachment">
            <span className="material-icons">attachment</span>
          </a>
          <a className="reply">
            <span className="material-icons">reply</span>
          </a>
        </div>
        <div
          className="text"
          data-placeholder="メッセージを入力"
          contentEditable="true"
        ></div>
      </div>
    </div>
  );
};

export default EdyInput;
