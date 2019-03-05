import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Register = () => {
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');

  const emailChangeHandler = event => {
    setEmail((email = event.target.value));
  };
  const passChangeHandler = event => {
    setPassword((password = event.target.value));
  };

  const submitHandler = event => {
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
      .catch(err => console.log(err));
  };

  return (
    <FormWrapper onSubmit={submitHandler}>
      <div>
        <h1>Register</h1>
      </div>
      <div className="form-item">
        <input
          required
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={emailChangeHandler}
        />
      </div>
      <div className="form-item">
        <input
          required
          type="password"
          value={password}
          name="password"
          onChange={passChangeHandler}
          placeholder="Password"
        />
      </div>
      <div>
        <button type="submit">Register</button>
      </div>
    </FormWrapper>
  );
};

export default Register;

const FormWrapper = styled.form`
  background: white;
  border-radius: 5px;
  padding: 2rem 2rem;
  width: 40rem;
  max-width: 80%;
  margin: 8rem auto;
  box-sizing: border-box;

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
  button:active {
    color: white;
    background: #fe6756;
    transition: 0.3s;
  }
`;
