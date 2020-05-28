import React from "react";
import NavBar from "./NavBar";
import ChatContainer from "./ChatContainer";
import "./style.scss";
// import { useDispatch } from "react-redux";

const App = () => {
  return (
    <>
      <NavBar />
      <ChatContainer />
    </>
  );
};

export default App;
