import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Auth from './containers/Auth';
import Promos from './containers/Promos';
import CreatePromo from './containers/CreatePromo';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Redirect from="/" to="/auth" exact />
          <Route path="/auth" component={Auth} />
          <Route path="/promos" component={Promos} />
          <Route path="/new-promo" component={CreatePromo} />
        </Switch>
      </Router>
    );
  }
}

export default App;
