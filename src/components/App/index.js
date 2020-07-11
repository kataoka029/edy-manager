import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./style.scss";
import MessageContainer from "./MessageContainer";
import NavBar from "./NavBar";
import OrderContainer from "./OrderContainer";

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
