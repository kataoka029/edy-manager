import React from "react";

import "./style.scss";
import Messages from "./Messages";
import EdyInput from "./EdyInput";

const CenterColumn = () => {
  return (
    <div className="center-column">
      <div className="messages">
        <Messages />
      </div>
      <EdyInput />
    </div>
  );
};

export default CenterColumn;
