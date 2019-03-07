import React, { useContext, useEffect } from 'react';
import Modal from '../components/UI/Modal';
import Backdrop from '../components/UI/Backdrop';
import axios from 'axios';
import { observer } from 'mobx-react-lite';
import { PromoStoreContext } from '../stores/PromoStore';
import { AuthStoreContext } from '../stores/AuthStore';

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
            description
            price
          }
        }
      `,
      })
      .then(res => {
        console.log(res.data);
        promoStore.listedPromos = res.data.data.promos;
      })
      .catch(err => console.log(err));
  };

  return (
    <React.Fragment>
      {authStore.isAuth ? <button onClick={setCreatingPromo}>Create New Promo</button> : null}
      {promoStore.creatingPromo === true ? <Modal setCreating={setCreatingPromo} /> : null}
      {promoStore.creatingPromo === true ? <Backdrop /> : null}
    </React.Fragment>
  );
});

export default Promos;
