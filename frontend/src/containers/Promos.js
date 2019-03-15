import React, { useContext, useEffect } from 'react';
import Modal from '../components/UI/Modal';
import Backdrop from '../components/UI/Backdrop';
import Spinner from '../components/UI/Spinner';
import axios from 'axios';
import { observer } from 'mobx-react-lite';
import { PromoStoreContext } from '../stores/PromoStore';
import { AuthStoreContext } from '../stores/AuthStore';
import styled from 'styled-components';
import PromoList from '../components/Promos/PromoList/PromoList';

const Promos = observer(() => {
  const promoStore = useContext(PromoStoreContext);
  const authStore = useContext(AuthStoreContext);

  useEffect(() => {
    fetchPromos();
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

  const fetchPromos = () => {
    promoStore.loading = true;

    axios
      .post('http://localhost:8000/graphql', {
        query: `
        query {
          promos {
            _id
            title
            link
            store
            date
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
        promoStore.loading = false;
        // console.log(res.data.data.promos);
      })
      .catch(err => {
        console.log(err);
        promoStore.loading = false;
      });
  };

  return (
    <React.Fragment>
      <HeaderWrapper>
        <h1>Share Promotions!</h1>
        {authStore.isAuth ? <button onClick={setCreatingPromo}>Add New</button> : null}
      </HeaderWrapper>
      {promoStore.creatingPromo === true ? (
        <Modal setCreating={setCreatingPromo} fetchPromos={fetchPromos} />
      ) : null}
      {promoStore.creatingPromo || promoStore.showDetails || authStore.toggleSideDrawer === true ? (
        <Backdrop />
      ) : null}

      {promoStore.loading ? (
        <Spinner />
      ) : (
        <PromoList promos={promoStore.listedPromos} userId={authStore.userId} />
      )}
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
    width: 15rem;
    max-width: 30rem;
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
