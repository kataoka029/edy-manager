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

// SOCKET.IO TEST
import io from "socket.io-client";
const socket = io.connect("http://localhost:4000/");
socket.on("news", (data) => {
  console.log(data);
  socket.emit("my other event", { my: "data" });
});
// SOCKET.IO TEST
