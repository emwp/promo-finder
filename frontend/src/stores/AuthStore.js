import { observable, decorate } from 'mobx';
import { createContext } from 'react';

class AuthStore {
  email = null;
  password = null;
  userId = null;
  token = null;
  tokenExpiration = null;
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
