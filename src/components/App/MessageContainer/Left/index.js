import React from "react";

import "./style.scss";
import Users from "./Users";
import SearchBar from "./SearchBar";

const Left = () => {
  return (
    <div className="left">
      <SearchBar />
      <Users />
    </div>
  );
};

export default Left;
