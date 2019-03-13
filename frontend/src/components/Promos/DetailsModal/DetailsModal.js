import React from 'react';
import styled from 'styled-components';

const DetailsModal = props => {
  const selectedPromo = props.promos.find(promo => promo._id === props.selected);

  return (
    <ModalWrapper>
      <header>
        <a target="_blank" rel="noopener noreferrer" href={selectedPromo.link}>
          {selectedPromo.title}
        </a>
      </header>
      <section className="promo_details">
        <p>Price: ${selectedPromo.price.toFixed(2)}</p>
        <p>Date Added: {new Date(selectedPromo.date).toLocaleDateString('pt-BR')}</p>
        <p>Store: {selectedPromo.store}</p>
      </section>
      <section className="promo_description">
        <p>{selectedPromo.description}</p>
      </section>
      <section className="btn">
        <button>Edit</button>
        <button>Delete</button>
        <button type="button" onClick={props.setDetails}>
          Close
        </button>
      </section>
    </ModalWrapper>
  );
};

export default DetailsModal;

const ModalWrapper = styled.div`
  width: 90%;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 20vh;
  left: 5%;
  border-radius: 0.3rem;
  z-index: 150;

  header {
    font-size: 1.5rem;
    font-weight: 600;
    color: #fe6756;
    padding: 0 1rem;
    margin-top: 0.5rem;
    text-align: center;
    padding: 1rem;
  }

  a {
    color: #fe6756;
    text-decoration: none;
  }

  .promo_details {
    color: #686868;
    display: flex;
    justify-content: space-between;
    margin: 0 1.2rem;
  }

  .promo_description p {
    margin: 0 1rem 0.7rem 1.2rem;
    padding: 1rem 0;
    color: #fe6756;
    text-align: justify;
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
    width: 25%;
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
