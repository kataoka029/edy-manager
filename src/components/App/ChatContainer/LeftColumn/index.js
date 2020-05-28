import React from "react";
import "./style.scss";
import pandaLeft from "../../../../img/panda-left.png";

const LeftColumn = () => {
  return (
    <div className="left-column">
      <section className="under-construction">
        <p>ユーザーの一覧を表示させたく、これから頑張って作ります。</p>
        <img src={pandaLeft} />
      </section>
    </div>
  );
};

export default LeftColumn;
