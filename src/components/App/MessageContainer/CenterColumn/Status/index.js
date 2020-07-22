import React from "react";

import "./style.scss";

const to_check = false;

const Status = () => {
  return (
    <div className="status">
      <span className="material-icons refresh">refresh</span>
      {to_check ? (
        <span className="material-icons to-check">priority_high</span>
      ) : (
        <span className="material-icons done">priority_high</span>
      )}
    </div>
  );
};

export default Status;
