import React, { useContext } from 'react';
import Modal from '../components/UI/Modal';
import Backdrop from '../components/UI/Backdrop';
import { observer } from 'mobx-react-lite';
import { PromoStoreContext } from '../stores/PromoStore';

const Promos = observer(() => {
  const promoStore = useContext(PromoStoreContext);

  const setCreatingPromo = () => {
    promoStore.creatingPromo = !promoStore.creatingPromo;
    if (promoStore.creatingPromo === false) {
      promoStore.title = '';
      promoStore.price = '';
      promoStore.description = '';
      promoStore.date = '';
    }
    console.log(promoStore.creatingPromo);
  };

  return (
    <React.Fragment>
      <button onClick={setCreatingPromo}>Create New Promo</button>
      {promoStore.creatingPromo === true ? <Modal setCreating={setCreatingPromo} /> : null}
      {promoStore.creatingPromo === true ? <Backdrop /> : null}
    </React.Fragment>
  );
});

export default Promos;
