import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { observer } from 'mobx-react-lite';
import { AuthStoreContext } from '../../../stores/AuthStore';
import GitHub from '../../../img/github.svg';
import LinkedIn from '../../../img/in.svg';

const Sidebar = observer(props => {
  const authStore = useContext(AuthStoreContext);

  const closeSidebar = () => {
    if (authStore.toggleSidebar) {
      authStore.toggleSidebar = false;
    }
  };

  return (
    <WrapperSidebar show={props.show}>
      <ul>
        <NavLink to="/" exact onClick={closeSidebar}>
          Home
        </NavLink>
        <NavLink to="/about" exact onClick={closeSidebar}>
          About
        </NavLink>
        {!authStore.token ? (
          <NavLink to="/login" exact onClick={closeSidebar}>
            Login
          </NavLink>
        ) : null}
        {!authStore.token ? (
          <NavLink to="/register" exact onClick={closeSidebar}>
            Register
          </NavLink>
        ) : null}
      </ul>
      <div className="social_links">
        <a href="https://github.com/emwp" target="_blank" rel="noopener noreferrer">
          <img src={GitHub} alt="GitHub" />
        </a>
        <a
          href="https://www.linkedin.com/in/everton-pereira-1588a1105/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={LinkedIn} alt="LinkedIn" />
        </a>
      </div>
    </WrapperSidebar>
  );
});

export default Sidebar;

const WrapperSidebar = styled.div`
  height: 100vh;
  background: white;
  box-shadow: 1px 0px 7px rgba(0, 0, 0, 0.5);
  width: 60vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 150;
  transform: translateX(${props => (props.show ? '0' : '-100%')});
  transition: transform 0.5s ease;

  ul {
    list-style: none;
    margin-top: 5rem;
    display: flex;
    flex-direction: column;
  }

  a {
    margin-bottom: 1rem;
    text-decoration: none;
    color: #fe6756;
  }

  .social_links {
    margin-top: 10%;
    margin-left: 10%;
    display: flex;
  }

  .social_links a {
    cursor: auto;
    margin: 0 1rem;
  }

  .social_links img {
    width: 1.3rem;
    cursor: pointer;
  }
`;
