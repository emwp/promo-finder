import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Promos from './containers/Promos';
import Navbar from './components/Navigation/Navbar';
import Backdrop from './components/UI/Backdrop';
import './App.css';
import Login from '../src/containers/Auth/Login';
import Register from '../src/containers/Auth/Register';
import { observer } from 'mobx-react-lite';
import { AuthStoreContext } from './stores/AuthStore';
import SideDrawer from './components/Navigation/SideDrawer/SideDrawer';

const App = observer(() => {
  const authStore = useContext(AuthStoreContext);
  return (
    <Router>
      <React.Fragment>
        {authStore.toggleSideDrawer ? <Backdrop /> : null}
        {authStore.toggleSideDrawer ? <SideDrawer /> : null}
        <Navbar />
        <main className="main-content">
          <Switch>
            {authStore.token && <Redirect from="/login" to="/" exact />}
            <Route exact path="/" component={Promos} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
          </Switch>
        </main>
      </React.Fragment>
    </Router>
  );
});

export default App;
