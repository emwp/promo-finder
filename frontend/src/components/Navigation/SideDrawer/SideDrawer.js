import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const SideDrawer = () => {
  return (
    <WrapperSideDrawer>
      <ul>
        <NavLink to="/" exact>
          Home
        </NavLink>
        <NavLink to="/login" exact>
          Login
        </NavLink>
        <NavLink to="/register" exact>
          Register
        </NavLink>
      </ul>
    </WrapperSideDrawer>
  );
};

export default SideDrawer;

const WrapperSideDrawer = styled.nav`
  height: 100vh;
  background: white;
  box-shadow: 1px 0px 7px rgba(0, 0, 0, 0.5);
  width: 60vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 150;

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
