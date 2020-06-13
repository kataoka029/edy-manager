import React from "react";
import "./style.scss";

const User = (props) => {
  return (
    <div
      className={props.selected ? "user selected" : "user"}
      data-user-id={props.userId}
    >
      <a href={props.link}>
        <p className="user-id">10001</p>
        <p className="text">
          LINEの友達追加ありがとうございます😀ご質問がありましたら、おっしゃってください！LINEの友達追加ありがとうございます😀ご質問がありましたら、おっしゃってください！
        </p>
      </a>
    </div>
  );
};

export default User;
