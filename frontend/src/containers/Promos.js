import React, { useContext } from 'react';
import Modal from '../components/UI/Modal';
import Backdrop from '../components/UI/Backdrop';
import { observer } from 'mobx-react-lite';
import { PromoStoreContext } from '../stores/PromoStore';

const Promos = observer(() => {
  const promoStore = useContext(PromoStoreContext);

  const setCreatingPromo = () => {
    promoStore.creatingPromo = true;
    console.log(promoStore.creatingPromo);
  };

  return (
    <React.Fragment>
      <button onClick={setCreatingPromo}>Create New Promo</button>
      {promoStore.creatingPromo === true ? <Modal /> : null}
      {promoStore.creatingPromo === true ? <Backdrop /> : null}
    </React.Fragment>
  );
});

export default Promos;
