import React from 'react';
import styled from 'styled-components';

const SideDrawer = () => {
  return <WrapperSideDrawer />;
};

export default SideDrawer;

const WrapperSideDrawer = styled.nav`
  height: 100vh;
  background: white;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  width: 70vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 150;
`;
