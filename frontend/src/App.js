import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import Promos from './containers/Promos';
import Navbar from './components/Navigation/Navbar/Navbar';
import Backdrop from './components/UI/Backdrop';
import Login from '../src/containers/Auth/Login';
import Register from '../src/containers/Auth/Register';
import { observer } from 'mobx-react-lite';
import { AuthStoreContext } from './stores/AuthStore';
import SideDrawer from './components/Navigation/SideDrawer/SideDrawer';
import GlobalStyle from './global.style';

const App = observer(() => {
  const authStore = useContext(AuthStoreContext);

  const backdropClickHandler = () => {
    authStore.toggleSideDrawer = false;
  };

  return (
    <Router>
      <React.Fragment>
        <GlobalStyle />
        {authStore.toggleSideDrawer ? <Backdrop click={backdropClickHandler} /> : null}
        {authStore.toggleSideDrawer ? <SideDrawer show={authStore.toggleSideDrawer} /> : null}
        <Navbar />
        <MainContent>
          <Switch>
            {authStore.token && <Redirect from="/login" to="/" exact />}
            <Route exact path="/" component={Promos} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
          </Switch>
        </MainContent>
      </React.Fragment>
    </Router>
  );
});

export default App;

const MainContent = styled.div`
  margin: 4rem 2rem;
`;
