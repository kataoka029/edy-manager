import React from "react";
import NavBar from "./NavBar";
import MessageContainer from "./MessageContainer";
import OrderContainer from "./OrderContainer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./style.scss";

const App = () => {
  return (
    <>
      <NavBar />
      <Router>
        <Route exact path="/" component={MessageContainer} />
        <Route path="/messages/:lineUserId" component={MessageContainer} />
        <Route path="/orders" component={OrderContainer} />
      </Router>
    </>
  );
};

export default App;
