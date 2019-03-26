import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import { observer } from 'mobx-react-lite';
import Promos from './pages/Promos';
import Navbar from './components/Navigation/Navbar/Navbar';
import Footer from './components/UI/Footer';
import Backdrop from './components/UI/Backdrop';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import About from './pages/About';
import { AuthStoreContext } from './stores/AuthStore';
import SideDrawer from './components/Navigation/SideDrawer/SideDrawer';
import GlobalStyle from './global.style';

const App = observer(() => {
  const authStore = useContext(AuthStoreContext);

  const backdropClickHandler = () => {
    authStore.toggleSideDrawer = false;
  };

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('token'));
    if (token !== null) {
      authStore.token = token;
      authStore.isAuth = true;
    }
  }, []);

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
            {authStore.token && <Redirect from="/register" to="/" exact />}
            <Route exact path="/" component={Promos} />
            <Route exact path="/about" component={About} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
          </Switch>
          <Footer />
        </MainContent>
      </React.Fragment>
    </Router>
  );
});

export default App;

const MainContent = styled.div`
  margin: 4rem 2rem;
`;
