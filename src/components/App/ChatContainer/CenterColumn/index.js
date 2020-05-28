import React from "react";
import "./style.scss";
import Chats from "./Chats";
import EdyInput from "./EdyInput";

const CenterColumn = () => {
  return (
    <div className="center-column">
      <Chats />
      <EdyInput />
    </div>
  );
};

export default CenterColumn;
