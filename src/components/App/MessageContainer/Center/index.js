import React from "react";

import "./style.scss";
import Messages from "./Messages";
import EdyInput from "./EdyInput";
import Status from "./Status";

const Center = () => {
  return (
    <div className="center">
      <Status />
      <Messages />
      <EdyInput />
    </div>
  );
};

export default Center;
