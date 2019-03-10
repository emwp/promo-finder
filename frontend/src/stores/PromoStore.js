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
  loading = false;
  showDetails = false;
  promoDetail = '';
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
  loading: observable,
  showDetails: observable,
  promoDetail: observable,
});

export const PromoStoreContext = createContext(new PromoStore());
