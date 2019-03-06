import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Promos from './containers/Promos';
import Navbar from './components/Navigation/Navbar';
import './App.css';
import Login from '../src/containers/Auth/Login';
import Register from '../src/containers/Auth/Register';

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Navbar />
          <main className="main-content">
            <Switch>
              <Route exact path="/" component={Promos} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
            </Switch>
          </main>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
