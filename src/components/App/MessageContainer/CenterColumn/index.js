import React from "react";

import "./style.scss";
import Messages from "./Messages";
import EdyInput from "./EdyInput";
import Status from "./Status";

const to_check = true;

const CenterColumn = () => {
  return (
    <div className="center-column">
      <Status />
      <Messages />
      <EdyInput />
    </div>
  );
};

export default CenterColumn;
