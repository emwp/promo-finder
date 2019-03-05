import { observable, decorate } from 'mobx';
import { createContext } from 'react';

class AuthStore {
  email = '';
  password = '';
}

decorate(AuthStore, {
  email: observable,
  password: observable,
});

export const AuthStoreContext = createContext(new AuthStore());
