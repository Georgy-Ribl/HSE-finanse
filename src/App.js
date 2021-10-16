import React, { Component } from 'react';

import {
  Route,
  Switch,
  Redirect,
  withRouter
} from "react-router-dom"

import './App.css';

import SignIn from "./components/sign/SignIn";
import SignUp from "./components/sign/SignUp";
import Shop from "./components/shop/Shop";
import Home from "./components/home/Home";

class App extends Component {
  render() {
    const { history } = this.props

    return (
        <div className="App">
          <Switch>
              <Route history={history} path='/SignIn' component={SignIn} />
              <Route history={history} path='/SignUp' component={SignUp} />
              <Route history={history} path='/Shop' component={Shop} />
              <Route history={history} path='/Home' component={Home} />
              <Redirect from='/' to='/Home'/>
          </Switch>
        </div>
    );
  }
}

export default withRouter(App)