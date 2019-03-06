import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { observer } from 'mobx-react-lite';
import { AuthStoreContext } from '../../stores/AuthStore';

const Login = observer(() => {
  const authStore = useContext(AuthStoreContext);

  const emailChangeHandler = event => {
    authStore.email = event.target.value;
  };
  const passChangeHandler = event => {
    authStore.password = event.target.value;
  };

  const submitHandler = event => {
    event.preventDefault();
    if (authStore.email.trim().length === 0 || authStore.password.trim().length === 0) {
      return;
    }
    axios
      .post('http://localhost:8000/graphql', {
        query: `
        query {
          login(email: "${authStore.email}", password: "${authStore.password}") {
            userId
            token
            tokenExpiration
          }
        }
      `,
      })
      .then(res => {
        if (res.data.data.login.token) {
          authStore.isAuth = true;
        }
        authStore.userId = res.data.data.login.userId;
        authStore.token = res.data.data.login.token;
        authStore.tokenExpiration = res.data.data.login.tokenExpiration;
      })
      .catch(err => console.log(err));
  };

  return (
    <FormWrapper onSubmit={submitHandler}>
      <div>
        <h1>Login</h1>
      </div>
      <div className="form-item">
        <input
          type="email"
          placeholder="Email"
          value={authStore.email}
          onChange={emailChangeHandler}
        />
      </div>
      <div className="form-item">
        <input
          type="password"
          placeholder="Password"
          value={authStore.password}
          onChange={passChangeHandler}
        />
      </div>
      <div>
        <button type="submit">Sign In</button>
        <div className="register-btn">
          <Link to="/register">Register</Link>
        </div>
      </div>
    </FormWrapper>
  );
});

export default Login;

const FormWrapper = styled.form`
  background: white;
  border-radius: 0.3rem;
  padding: 2rem 2rem;
  width: 40rem;
  max-width: 80%;
  margin: 8rem auto;
  box-sizing: border-box;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);

  h1 {
    margin-top: 0;
    margin-bottom: 1rem;
    text-align: center;
    color: #fe6756;
  }
  .register-btn a {
    display: block;
    text-align: center;
    text-decoration: none;
    border: 2px solid #fe6756;
    border-radius: 0.3rem;
    box-sizing: border-box;
    font-size: 1rem;
    color: #fe6756;
    background: white;
    margin-top: 0.5rem;
    padding: 4px 0;
    cursor: pointer;
    width: 100%;
    align-items: center;
    font-family: inherit;
  }
  .form-item input {
    font-size: 1rem;
    width: 100%;
    margin: 0.4rem 0px;
    box-sizing: border-box;
    border-radius: 3px;
    padding: 10px 10px;
    font-family: inherit;
  }

  button {
    border: 2px solid #fe6756;
    border-radius: 5px;
    font-size: 1rem;
    color: #fe6756;
    background: white;
    margin-top: 0.5rem;
    padding: 4px 0;
    cursor: pointer;
    width: 100%;
    align-items: center;
    font-family: inherit;
  }

  button:hover,
  button:active,
  .register-btn a:hover,
  .register-btn a:active {
    color: white;
    background: #fe6756;
    transition: 0.3s;
  }
`;
