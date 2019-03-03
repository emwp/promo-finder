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

  @media (max-width: 768px) {
    display: none;
  }

  .nav-link {
    margin: 0 1rem;
    color: #e78200;
    background: white;
    text-decoration: none;
    border: 2px solid #e78200;
    padding: 5px 10px;
    border-radius: 5px;
    display: inline-block;
    vertical-align: middle;
    transform: translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0.5);
    backface-visibility: hidden;
    -moz-osx-font-smoothing: grayscale;
    transition-duration: 0.3s;
    transition-property: transform;
  }
  .nav-link:hover,
  .hvr-grow:focus,
  .nav-link:active,
  .nav-link.active {
    background: #e78200;
    color: white;
    transform: scale(1.1);
  }
`;

export default NavbarLinks;
