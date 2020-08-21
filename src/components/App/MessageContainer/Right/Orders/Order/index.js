import React, { useState } from "react";

import "./style.scss";
import { calculateDate } from "../../../../../../utils";

const Order = (props) => {
  const order = props.order;
  const [unlockedAt, setUnlockedAt] = useState(
    calculateDate(order.unlocked_at)
  );
  const [lockedAt, setLockedAt] = useState(calculateDate(order.locked_at));
  const [itemId, setItemId] = useState(
    order.item_id === "_" ? "-" : order.item_id
  );
  const [priceAdj, setPriceAdj] = useState(order.price_adj);
  const [cancelFlg, setCancelFlg] = useState(order.cancel_flg);

  return (
    <div className="order">
      <div className="row key-datetime-start">
        <span className="material-icons">lock_open</span>
        <input
          type="datetime-local"
          value={unlockedAt}
          onChange={(e) => setUnlockedAt(e.target.value)}
        />
      </div>

      <div className="row key-datetime-end">
        <span className="material-icons">lock</span>
        <input
          type="datetime-local"
          value={lockedAt}
          onChange={(e) => setLockedAt(e.target.value)}
        />
      </div>

      <div className="row item">
        <span className="material-icons">favorite</span>
        <input
          type="text"
          value={itemId}
          onChange={(e) => setItemId(e.target.value)}
        />
      </div>

      <div className="row refund">
        <span className="material-icons">undo</span>
        <input
          type="text"
          value={priceAdj}
          onChange={(e) => setPriceAdj(e.target.value)}
        />
      </div>

      <div className="row cancel">
        <span className="material-icons">cancel</span>
        <input
          type="checkbox"
          id="cancel"
          checked={cancelFlg}
          onChange={(e) => setCancelFlg(e.target.checked ? 1 : 0)}
        />
        <label htmlFor="cancel">キャンセル</label>
      </div>

      <div className="row button">
        <button>更新</button>
      </div>
    </div>
  );
};

export default Order;
