import React from "react";

import "./style.scss";

const calculateDate = (timestamp) => {
  const date = new Date(timestamp);
  return `${date.getFullYear()}-${("0" + (date.getMonth() + 1)).slice(-2)}-${(
    "0" + date.getDate()
  ).slice(-2)}T${("0" + date.getHours()).slice(-2)}:${(
    "0" + date.getMinutes()
  ).slice(-2)}`;
};

const Order = (props) => {
  const order = props.order;

  return (
    <div className="order">
      <div className="row key-datetime-start">
        <span className="material-icons">lock_open</span>
        <input
          type="datetime-local"
          value={calculateDate(order.unlocked_at)}
          onChange={(e) => console.log(e.target.value)}
        />
      </div>

      <div className="row key-datetime-end">
        <span className="material-icons">lock</span>
        <input type="datetime-local" />
      </div>

      <div className="row item">
        <span className="material-icons">favorite</span>
        <input type="text" placeholder="10001" />
      </div>

      <div className="row refund">
        <span className="material-icons">undo</span>
        <input type="text" placeholder="0" />
      </div>

      <div className="row cancel">
        <span className="material-icons">cancel</span>
        <input type="checkbox" id="cancel" />
        <label htmlFor="cancel">キャンセル</label>
      </div>

      <div className="row button">
        <button>更新</button>
      </div>
    </div>
  );
};

export default Order;
