import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const NavbarLinks = () => {
  return (
    <NavLinksWrapper>
      <li>
        <NavLink to="/" exact className="nav-link">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/new-promo" exact className="nav-link">
          New Promo
        </NavLink>
      </li>
      <li>
        <NavLink to="/login" exact className="nav-link">
          Login
        </NavLink>
      </li>
      <li>
        <NavLink to="/register" exact className="nav-link">
          Register
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
    color: #fe6756;
    background: white;
    text-decoration: none;
    border: 2px solid #fe6756;
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
    background: #fe6756;
    color: white;
    transform: scale(1.1);
  }
`;

export default NavbarLinks;
