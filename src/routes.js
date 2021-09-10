import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
