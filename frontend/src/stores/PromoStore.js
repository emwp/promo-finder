import { observable, decorate } from 'mobx';
import { createContext } from 'react';

class PromoStore {
  creatingPromo = false;
  title = '';
  link = '';
  store = '';
  description = '';
  price = '';
  date = '';
  listedPromos = [];
}

decorate(PromoStore, {
  creatingPromo: observable,
  title: observable,
  link: observable,
  store: observable,
  description: observable,
  price: observable,
  date: observable,
  listedPromos: observable,
});

export const PromoStoreContext = createContext(new PromoStore());
