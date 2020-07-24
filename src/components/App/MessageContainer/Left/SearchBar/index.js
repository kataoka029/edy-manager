import React from "react";
import { useDispatch, useSelector } from "react-redux";

import "./style.scss";

const SearchBar = () => {
  const dispatch = useDispatch();
  const userFlg = useSelector((state) => state.userFlg);
  const toCheckFlg = useSelector((state) => state.toCheckFlg);

  const userClass = userFlg ? "users" : "line-users";
  const toCheckClass = toCheckFlg ? "to_check" : "all";

  return (
    <div className="search-bar">
      <span
        className={`material-icons ${userClass}`}
        onClick={() => dispatch({ type: "SET_USERFLG", userFlg: !userFlg })}
      >
        account_circle
      </span>
      <span
        className={`material-icons ${toCheckClass}`}
        onClick={() =>
          dispatch({ type: "SET_TOCHECKFLG", toCheckFlg: !toCheckFlg })
        }
      >
        error
      </span>
      <input
        className="search"
        onChange={(e) => dispatch({ type: "SET_QUERY", query: e.target.value })}
        placeholder="検索（ID・プロフィール名・氏名）"
      />
    </div>
  );
};

export default SearchBar;
