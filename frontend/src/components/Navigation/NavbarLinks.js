import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const NavbarLinks = () => {
  return (
    <NavLinksWrapper>
      <li>
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/new-promo" className="nav-link">
          New Promo
        </NavLink>
      </li>
      <li>
        <NavLink to="/auth" className="nav-link">
          Authenticate
        </NavLink>
      </li>
    </NavLinksWrapper>
  );
};

const NavLinksWrapper = styled.ul`
  display: flex;
  margin: 0 0 0 2rem;
  padding: 0;
  list-style: none;

  .nav-link {
    margin: 0 1rem;
    color: yellow;
    text-decoration: none;
  }
  .nav-link:hover,
  .nav-link:active,
  .nav-link.active {
    color: white;
  }
`;

export default NavbarLinks;
