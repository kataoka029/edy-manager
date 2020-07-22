import React from "react";

import "./style.scss";

const SearchBar = () => {
  const user = false;
  const userClass = user ? "user" : "all";
  const toCheck = false;
  const toCheckClass = toCheck ? "to_check" : "done";

  return (
    <div className="search-bar">
      <span className={`material-icons ${userClass}`}>account_circle</span>
      <span className={`material-icons ${toCheckClass}`}>error</span>
      <input className="search" placeholder="検索" />
    </div>
  );
};

export default SearchBar;
