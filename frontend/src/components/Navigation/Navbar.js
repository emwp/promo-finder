import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import NavbarLinks from './NavbarLinks';
import Logo from '../../img/logo.png';
import ToggleButton from './SideDrawer/ToggleButton';

const Navbar = () => {
  return (
    <NavWrapper>
      <ToggleButton />
      <Link to="/" className="nav_logo">
        <img src={Logo} alt="logo" />
      </Link>
      <NavbarLinks />
    </NavWrapper>
  );
};

export default Navbar;

// CSS

const NavWrapper = styled.nav`
  background: #f4f5f7;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  display: flex;
  height: 3.5rem;
  color: #3d3f42;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 768px) {
    .nav_logo {
      justify-content: space-between;
    }

    .nav_logo h1 {
      margin: 0;
      font-size: 1.5rem;
    }
  }
`;
