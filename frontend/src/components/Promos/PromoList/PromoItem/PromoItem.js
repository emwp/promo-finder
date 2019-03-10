import React from 'react';
import styled from 'styled-components';

const PromoItem = props => {
  return (
    <ItemWrapper key={props.promoId}>
      <h1>
        <a target="_blank" rel="noopener noreferrer" href={props.link}>
          {props.title} - [{props.store}]
        </a>
      </h1>
      <p className="promo_price">${props.price.toFixed(2)}</p>
      <p>{props.description}</p>
      <button>Details</button>
      {props.userId === props.creatorId ? (
        <p className="promo_owner">You've created this promo</p>
      ) : null}
    </ItemWrapper>
  );
};

export default PromoItem;

const ItemWrapper = styled.li`
  border: 1px solid white;
  padding: 1rem;
  margin: 1rem 0;
  background: white;
  color: #fe6756;
  border-radius: 0.4rem;
  overflow: auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;

  .promo_price {
    text-align: center;
  }

  .promo_owner {
    text-align: center;
    text-decoration: underline;
  }

  button {
    border: 2px solid #fe6756;
    border-radius: 5px;
    font-size: 1rem;
    color: #fe6756;
    background: white;
    padding: 4px 0;
    cursor: pointer;
    width: 25%;
    margin: 0 auto;
    align-items: center;
    font-family: inherit;
    outline: none;
  }

  button:hover,
  button:active {
    color: white;
    background: #fe6756;
    transition: 0.3s;
  }

  a {
    color: #fe6756;
    text-decoration: none;
  }

  h1 {
    font-size: 1.2rem;
    text-align: center;
    margin: 0;
  }
`;
