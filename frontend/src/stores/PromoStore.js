import { observable, decorate } from 'mobx';
import { createContext } from 'react';

class PromoStore {
  creatingPromo = false;
}

decorate(PromoStore, {
  creatingPromo: observable,
});

export const PromoStoreContext = createContext(new PromoStore());
