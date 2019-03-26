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
import Sidebar from './components/Navigation/Sidebar/Sidebar';
import GlobalStyle from './global.style';

const App = observer(() => {
  const authStore = useContext(AuthStoreContext);

  const backdropClickHandler = () => {
    authStore.toggleSidebar = false;
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
        {authStore.toggleSidebar ? <Backdrop click={backdropClickHandler} /> : null}
        {authStore.toggleSidebar ? <Sidebar show={authStore.toggleSidebar} /> : null}
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
