import React, { useContext } from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react-lite';
import { AuthStoreContext } from '../../../stores/AuthStore';

const ToggleButton = observer(() => {
  const authStore = useContext(AuthStoreContext);

  const setDisplaySidebar = () => {
    authStore.toggleSidebar = !authStore.toggleSidebar;
  };

  return (
    <ToggleBtn onClick={setDisplaySidebar}>
      <ToggleBtnLine />
      <ToggleBtnLine />
      <ToggleBtnLine />
    </ToggleBtn>
  );
});

export default ToggleButton;

const ToggleBtn = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 1.5rem;
  width: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  box-sizing: border-box;

  &:focus {
    outline: none;
  }

  @media (min-width: 767px) {
    display: none;
  }
`;

const ToggleBtnLine = styled.div`
  width: 2rem;
  height: 3px;
  background: #fe6756;
`;
