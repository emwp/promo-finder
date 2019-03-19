import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { observer } from 'mobx-react-lite';
import { AuthStoreContext } from '../../../stores/AuthStore';

const SideDrawer = observer(props => {
  const authStore = useContext(AuthStoreContext);

  const closeSideDrawer = () => {
    if (authStore.toggleSideDrawer) {
      authStore.toggleSideDrawer = false;
    }
  };

  return (
    <WrapperSideDrawer show={props.show}>
      <ul>
        <NavLink to="/" exact onClick={closeSideDrawer}>
          Home
        </NavLink>
        {!authStore.token ? (
          <NavLink to="/login" exact onClick={closeSideDrawer}>
            Login
          </NavLink>
        ) : null}
        {!authStore.token ? (
          <NavLink to="/register" exact onClick={closeSideDrawer}>
            Register
          </NavLink>
        ) : null}
      </ul>
    </WrapperSideDrawer>
  );
});

export default SideDrawer;

const WrapperSideDrawer = styled.div`
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
`;
