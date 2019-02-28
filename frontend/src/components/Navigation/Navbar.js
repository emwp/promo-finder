import React from 'react';
import styled from 'styled-components';
import NavbarLinks from './NavbarLinks';
// import NavbarIcons from './NavbarIcons';

const Navbar = () => {
  return (
    <NavWrapper>
      <div className="nav_logo">
        <h1>PromoFinder</h1>
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
  background: red;
  align-items: center;
  justify-content: space-around;

  .nav_logo h1 {
    margin: 0;
    font-size: 1.5rem;
  }
`;
