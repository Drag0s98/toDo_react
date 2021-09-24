import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Tasks from "../Tasks";
import Weather from "../Weather";
import Error from "../Error";
import Home from "../Home";
import './Main.css'


class Main extends Component {
  render() {
    return(
      <main>
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/tasks' component={Tasks}  />
          <Route path='/weather' component={Weather}  />
          <Route component={Error}  />
        </Switch>
      </main>
    )
  }
}

export default Main;