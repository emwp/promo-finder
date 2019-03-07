import React, { useContext, useEffect } from 'react';
import Modal from '../components/UI/Modal';
import Backdrop from '../components/UI/Backdrop';
import axios from 'axios';
import { observer } from 'mobx-react-lite';
import { PromoStoreContext } from '../stores/PromoStore';
import { AuthStoreContext } from '../stores/AuthStore';
import styled from 'styled-components';

const Promos = observer(() => {
  const promoStore = useContext(PromoStoreContext);
  const authStore = useContext(AuthStoreContext);

  useEffect(() => {
    fetchEvents();
  }, []);

  const setCreatingPromo = () => {
    promoStore.creatingPromo = !promoStore.creatingPromo;
    if (promoStore.creatingPromo === false) {
      promoStore.title = '';
      promoStore.link = '';
      promoStore.store = '';
      promoStore.price = '';
      promoStore.description = '';
      promoStore.date = '';
    }
  };

  const fetchEvents = () => {
    axios
      .post('http://localhost:8000/graphql', {
        query: `
        query {
          promos {
            _id
            title
            link
            store
            description
            price
            creator {
              _id
              email
            }
          }
        }
      `,
      })
      .then(res => {
        promoStore.listedPromos = res.data.data.promos;
        console.log(res.data.data.promos);
      })
      .catch(err => console.log(err));
  };

  const promoList = promoStore.listedPromos.map(promo => {
    return (
      <li key={promo._id}>
        <h1>
          <a target="_blank" rel="noopener noreferrer" href={promo.link}>{promo.title}  - [{promo.store}]</a>
        </h1>
        <p className="promo_price">${promo.price.toFixed(2)}</p>
        <p>{promo.description}</p>
      </li>
    );
  });

  return (
    <React.Fragment>
      <HeaderWrapper>
        <h1>Share Promotions!</h1>
        {authStore.isAuth ? <button onClick={setCreatingPromo}>Create New Promo</button> : null}
      </HeaderWrapper>
      {promoStore.creatingPromo === true ? (
        <Modal setCreating={setCreatingPromo} fetchEvents={fetchEvents} />
      ) : null}
      {promoStore.creatingPromo === true ? <Backdrop /> : null}
      <PromoWrapper>{promoList}</PromoWrapper>
    </React.Fragment>
  );
});

export default Promos;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    color: white;
    text-align: center;
  }

  button {
    border: 2px solid #fe6756;
    border-radius: 0.4rem;
    font-size: 1.2rem;
    color: #fe6756;
    background: white;
    padding: 0.5rem 0;
    cursor: pointer;
    width: 30%;
    align-items: center;
    font-family: inherit;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  }

  button:hover,
  button:active {
    color: white;
    background: turquoise;
    border: 2px solid turquoise;
    transition: 0.3s;
  }
`;

const PromoWrapper = styled.ul`
  width: 40rem;
  max-width: 90%;
  margin: 2rem auto 2rem auto;
  list-style: none;
  padding: 0;

  li {
    /* border: 1px solid #fe6756; */
    border: 1px solid white;
    padding: 1rem;
    margin: 1rem 0;
    background: white;
    color: #fe6756;
    border-radius: 0.4rem;
    overflow: auto;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  }

  .promo_price {
    text-align: center;
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
