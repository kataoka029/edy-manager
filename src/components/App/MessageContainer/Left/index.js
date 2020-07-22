import React from "react";

import "./style.scss";
import LatestMessages from "./LatestMessages";
import SearchBar from "./SearchBar";

const Left = () => {
  return (
    <div className="left">
      <SearchBar />
      <LatestMessages />
    </div>
  );
};

export default Left;
