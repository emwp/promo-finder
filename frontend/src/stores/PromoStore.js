import { observable, decorate } from 'mobx';
import { createContext } from 'react';

class PromoStore {
  creatingPromo = false;
  title = '';
  description = '';
  price = '';
  date = '';
  listedPromos = [];
}

decorate(PromoStore, {
  creatingPromo: observable,
  title: observable,
  description: observable,
  price: observable,
  date: observable,
  listedPromos: observable,
});

export const PromoStoreContext = createContext(new PromoStore());
