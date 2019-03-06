import { observable, decorate } from 'mobx';
import { createContext } from 'react';

class PromoStore {
  createPromo = false;
}

decorate(PromoStore, {
  createPromo: observable,
});

export const PromoStoreContext = createContext(new PromoStore());
