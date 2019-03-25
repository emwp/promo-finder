import React from 'react';
import styled from 'styled-components';

const Backdrop = props => {
  return <BackdropWrapper onClick={props.click} />;
};

export default Backdrop;

const BackdropWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.6);
  height: 100vh;
  width: 100%;
  z-index: 100;
`;
