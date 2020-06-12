import React from "react";
import "./style.scss";
import pandaRight from "../../../../img/panda-right.png";

const RightColumn = () => {
  return (
    <div className="right-column">
      <section className="under-construction">
        <p>///ユーザーの詳細を表示させたく、これから頑張って作ります。</p>
        <img src={pandaRight} />
      </section>
    </div>
  );
};

export default RightColumn;
