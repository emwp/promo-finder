import React, { useState } from 'react';
import styled from 'styled-components';

const Navbar = () => {
  return (
    <NavWrapper>
      <NavbarLinks />
      <NavbarIcons />
    </NavWrapper>
  );
};

export default Navbar;

// CSS

const NavWrapper = styled.nav`
  /* background: #28a19f; */
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
  }
`;
