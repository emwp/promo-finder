import React, { useContext } from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react-lite';
import { PromoStoreContext } from '../../stores/PromoStore';

const Modal = observer(props => {
  const promoStore = useContext(PromoStoreContext);

  const titleChangeHandler = event => {
    promoStore.title = event.target.value;
    console.log(promoStore.title);
  };
  const priceChangeHandler = event => {
    promoStore.price = event.target.value;
    console.log(promoStore.price);
  };
  const descriptionChangeHandler = event => {
    promoStore.description = event.target.value;
    console.log(promoStore.description);
  };

  return (
    <ModalWrapper>
      <header>Add New Promo</header>
      <form>
        <section>
          <input
            type="text"
            placeholder="Title"
            value={promoStore.title}
            onChange={titleChangeHandler}
          />
          <input
            type="number"
            placeholder="Price"
            value={promoStore.price}
            onChange={priceChangeHandler}
          />
          <textarea
            rows="4"
            type="text"
            placeholder="Description"
            value={promoStore.description}
            onChange={descriptionChangeHandler}
          />
        </section>
        <section className="btn">
          <button onClick={props.setCreating}>Cancel</button>
          <button onClick={props.setCreating}>Continue</button>
        </section>
      </form>
    </ModalWrapper>
  );
});

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

  textarea {
    resize: vertical;
    max-height: 20rem;
  }

  input,
  textarea {
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
