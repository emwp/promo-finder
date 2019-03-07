import React from 'react';
import PromoItem from './PromoItem/PromoItem';
import styled from 'styled-components';

const PromoList = (props) => {

  const promos = props.promos.map(promo => {
    return (
      <PromoItem 
        key={promo._id} 
        promoId={promo._id} 
        title={promo.title} 
        description={promo.description} 
        price={promo.price} 
        date={promo.date} 
        store={promo.store}
        link={promo.link}/>
    ) 
  });

  return (
    <PromoWrapper>{promos}</PromoWrapper>
  )
}

export default PromoList

const PromoWrapper = styled.ul`
  width: 40rem;
  max-width: 90%;
  margin: 2rem auto 2rem auto;
  list-style: none;
  padding: 0;
`;