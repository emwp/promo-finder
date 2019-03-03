import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Auth from './containers/Auth';
import Promos from './containers/Promos';
import CreatePromo from './containers/CreatePromo';
import Navbar from './components/Navigation/Navbar';
import './App.css';
import Login from '../src/containers/Login';

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Navbar />
          <main className="main-content">
            <Switch>
              {/* <Redirect from="/" to="/auth" exact /> */}
              <Route exact path="/" component={Login} />
              <Route exact path="/auth" component={Auth} />
              <Route exact path="/promos" component={Promos} />
              <Route exact path="/new-promo" component={CreatePromo} />
            </Switch>
          </main>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
