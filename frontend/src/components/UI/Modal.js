import React from 'react';
import styled from 'styled-components';

const Modal = () => {
  return (
    <ModalWrapper>
      <header>Add New Promo</header>
      <section>
        <input
          type="text"
          placeholder="Title"
          // value={authStore.password}
          // onChange={passChangeHandler}
        />
        <input
          type="text"
          placeholder="Description"
          // value={authStore.password}
          // onChange={passChangeHandler}
        />
        <input
          type="text"
          placeholder="Price"
          // value={authStore.password}
          // onChange={passChangeHandler}
        />
      </section>
      <section className="btn">
        <button>Continue</button>
        <button>Cancel</button>
      </section>
    </ModalWrapper>
  );
};

export default Modal;

const ModalWrapper = styled.div`
  width: 90%;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 20vh;
  left: 5%;
  border-radius: 0.3rem;
  z-index: 150;
  /* padding: 1rem 1rem; */

  header {
    font-size: 1.5rem;
    font-weight: 600;
    color: #fe6756;
    padding: 1rem;
    text-align: center;
  }

  input {
    width: 90%;
    margin: 0.5rem 5% 0.5rem;

    font-size: 1rem;
    box-sizing: border-box;
    border-radius: 3px;
    padding: 10px 10px;
    font-family: inherit;
  }

  button {
    border: 2px solid #fe6756;
    border-radius: 5px;
    font-size: 1rem;
    color: #fe6756;
    background: white;
    margin: 0.5rem 0.5rem 1rem 0.5rem;
    padding: 4px 0;
    cursor: pointer;
    width: 30%;
    font-family: inherit;
    display: inline-block;
  }

  button:hover,
  button:active {
    color: white;
    background: #fe6756;
    transition: 0.3s;
  }

  section.btn {
    display: flex;
    justify-content: center;
  }

  @media (min-width: 768px) {
    width: 35rem;
    left: calc((100% - 35rem) / 2);
  }
`;
