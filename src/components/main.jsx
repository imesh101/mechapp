import React, { Component } from "react";
import Services from "./pages/services";
import Navbar from "./navbar/navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";

class Main extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <Navbar account="Pasindu" />
          <Switch>
            <Route exact path="/" component={Services} />
          </Switch>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default Main;
