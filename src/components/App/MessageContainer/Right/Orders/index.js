import React from "react";
import { useSelector } from "react-redux";

import "./style.scss";
import Order from "./Order";

const Orders = () => {
  const ordersByUser = useSelector((state) => state.ordersByUser);

  return (
    <div className="orders">
      {ordersByUser.length > 0 ? (
        ordersByUser.map((order, index) => (
          <Order order={order} key={`order${index}`} />
        ))
      ) : (
        <div className="no-orders">ご注文はありません。</div>
      )}
    </div>
  );
};

export default Orders;
