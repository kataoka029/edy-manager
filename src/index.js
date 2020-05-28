// NEW
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/";
import { createStore } from "redux";
import { Provider } from "react-redux";
import "./reset.css";

const initialState = {
  chats: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CHATS":
      return { ...state, chats: action.chats };
    default:
      return state;
  }
};

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);

// OLD
// const messagesContainer = document.querySelector("div.messages-container");
const edyInputText = document.querySelector("div.edy-input div.text");
const replyButton = document.querySelector("a.reply");
const url = "https://edy-api.herokuapp.com/";

// DBには入るけど、LINEには送れていない
replyButton.addEventListener("click", () => {
  const replyEvents = [];
  replyEvents[0] = {
    type: "message",
    replyToken: "_",
    source: {
      userId: "_",
      type: "edy",
    },
    message: {
      id: "_",
      type: "text",
      text: edyInputText.innerText,
    },
  };
  fetch(`${url}/api/messages`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(replyEvents),
  });
  location.reload();
});
