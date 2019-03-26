import React, { useContext } from 'react';
import styled from 'styled-components';
import { NavLink, withRouter, Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { AuthStoreContext } from '../../../stores/AuthStore';

const NavbarLinks = withRouter(
  observer(() => {
    const authStore = useContext(AuthStoreContext);

    const setLogout = () => {
      authStore.isAuth = false;
      authStore.userId = '';
      authStore.token = '';
      authStore.tokenExpiration = '';
      authStore.email = '';
      authStore.password = '';
    };

    return (
      <NavLinksWrapper>
        <li>
          <NavLink to="/" exact className="nav-link">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" exact className="nav-link">
            About
          </NavLink>
        </li>
        {authStore.token === '' && authStore.userId === '' && authStore.tokenExpiration === '' ? (
          <li>
            <NavLink to="/login" exact className="nav-link">
              Login
            </NavLink>
          </li>
        ) : null}
        {authStore.token === '' && authStore.userId === '' && authStore.tokenExpiration === '' ? (
          <li>
            <NavLink to="/register" exact className="nav-link">
              Register
            </NavLink>
          </li>
        ) : null}
        {authStore.token !== '' ? (
          <li>
            <Link onClick={setLogout} to="/" className="nav-link">
              Logout
            </Link>
          </li>
        ) : null}
      </NavLinksWrapper>
    );
  }),
);

const NavLinksWrapper = styled.ul`
  display: flex;
  margin: 0 0 0 2rem;
  padding: 0;
  list-style: none;

  @media (max-width: 767px) {
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
    transition: 0.3s;
  }
`;

export default NavbarLinks;
