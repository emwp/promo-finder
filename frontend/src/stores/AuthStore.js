import { observable, decorate } from 'mobx';
import { createContext } from 'react';

class AuthStore {
  email = '';
  password = '';
  userId = '';
  token = '';
  tokenExpiration = '';
  isAuth = false;
}

decorate(AuthStore, {
  email: observable,
  password: observable,
  userId: observable,
  token: observable,
  tokenExpiration: observable,
  isAuth: observable,
});

export const AuthStoreContext = createContext(new AuthStore());
