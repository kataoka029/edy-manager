import React from "react";

import "./style.scss";
import Order from "./Order";

const Orders = () => {
  return (
    <div className="orders">
      <Order />
      <Order />
      <Order />
    </div>
  );
};

export default Orders;
