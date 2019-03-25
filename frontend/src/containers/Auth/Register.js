import React, { useContext } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { observer } from 'mobx-react-lite';
import { AuthStoreContext } from '../../stores/AuthStore';

const Register = observer(() => {
  const authStore = useContext(AuthStoreContext);

  const emailChangeHandler = event => {
    authStore.email = event.target.value;
    // console.log(authStore.email);
  };
  const passChangeHandler = event => {
    authStore.password = event.target.value;
    // console.log(authStore.password);
  };

  const submitHandler = event => {
    const { email, password } = authStore;
    event.preventDefault();
    if (email.trim().length === 0 || password.trim().length === 0) {
      return;
    }
    axios
      .post('http://localhost:8000/graphql', {
        query: `
        mutation {
          createUser(userInput: {email: "${email}", password: "${password}"}) {
            _id
            email
          }
        }
      `,
      })
      .then(res => console.log(res.data))
      .then(() => {
        authStore.email = '';
        authStore.password = '';
        console.log(authStore.email);
      })
      .catch(err => console.log(err));
  };

  return (
    <FormWrapper onSubmit={submitHandler}>
      <div>
        <h1>Register</h1>
      </div>
      <div className="form-item">
        <input
          type="email"
          placeholder="Email"
          required={true}
          value={authStore.email}
          onChange={emailChangeHandler}
        />
      </div>
      <div className="form-item">
        <input
          type="password"
          required={true}
          value={authStore.password}
          onChange={passChangeHandler}
          placeholder="Password"
        />
      </div>
      <div>
        <button type="submit">Register</button>
      </div>
    </FormWrapper>
  );
});

export default Register;

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
    border-radius: 0.3rem;
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
  button:active {
    color: white;
    background: #fe6756;
    transition: 0.3s;
  }
`;
