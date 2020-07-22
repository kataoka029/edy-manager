import React from "react";

import "./style.scss";
import qr from "../../../../img/qr.png";

const Right = () => {
  return (
    <div className="right">
      <section className="under-construction">
        <p>
          友達追加のためのQRコードです。いずれはユーザーの注文情報を表示させる予定です。
        </p>
        <img src={qr} alt="pandRight" />
      </section>
    </div>
  );
};

export default Right;
