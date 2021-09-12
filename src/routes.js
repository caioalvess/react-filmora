import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import Erro from "./Pages/Erro/Erro";
import Filme from "./Pages/Filme/Filme";

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/filme/:id" component={Filme} />
        <Route exact path="*" component={Erro} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
