import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./components/App/";
import "./reset.css";
import store from "./redux/store.js";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);

// // socket.ioの設定;
// import io from "socket.io-client";
// const socket = io.connect("http://localhost:4000/");
// socket.on("refetch", (data) => {
//   console.log(`Message from line-use-id: "${data.event.source.userId}"`);
// });
