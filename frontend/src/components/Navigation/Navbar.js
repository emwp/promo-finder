import React from 'react';
import styled from 'styled-components';
import NavbarLinks from './NavbarLinks';
import Logo from '../../img/logo.png';

const Navbar = () => {
  return (
    <NavWrapper>
      <div className="nav_logo">
        <img src={Logo} alt="logo" />
      </div>
      <NavbarLinks />
    </NavWrapper>
  );
};

export default Navbar;

// CSS

const NavWrapper = styled.nav`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  display: flex;
  height: 3.5rem;
  color: #3d3f42;
  align-items: center;
  justify-content: space-around;

  .nav_toggle {
    display: none;
  }

  @media (max-width: 768px) {
    .nav_toggle {
      display: flex;
      cursor: pointer;
    }
    .nav_logo {
      justify-content: space-between;
    }

    .nav_logo h1 {
      margin: 0;
      font-size: 1.5rem;
    }
  }
`;
