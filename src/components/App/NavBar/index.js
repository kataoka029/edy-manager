import React from "react";

import "./style.scss";

const NavBar = () => {
  return (
    <header>
      <h1 className="title">EDY MANAGER</h1>
      <nav>
        <ul className="menu">
          <li>メッセージ</li>
          <li>予約管理</li>
          <li>返却管理</li>
          <li>売上管理</li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
