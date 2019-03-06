import { observable, decorate } from 'mobx';
import { createContext } from 'react';

class PromoStore {
  creatingPromo = false;
  title = '';
  description = '';
  price = '';
  date = '';
}

decorate(PromoStore, {
  creatingPromo: observable,
  title: observable,
  description: observable,
  price: observable,
  date: observable,
});

export const PromoStoreContext = createContext(new PromoStore());
