import React from 'react';
import styled from 'styled-components';

const Login = () => {
  return (
    <FormWrapper>
      <div>
        <h1>Register</h1>
      </div>
      <div className="form-item">
        <label htmlFor="email">Email</label>
        <input type="email" />
      </div>
      <div className="form-item">
        <label htmlFor="password">Password</label>
        <input type="password" />
      </div>
      <div className="form-item">
        <label htmlFor="password">Confirm your password</label>
        <input type="password" />
      </div>
      <div>
        <button type="submit">Register</button>
      </div>
    </FormWrapper>
  );
};

export default Login;

const FormWrapper = styled.form`
  border: 2px solid #e78200;
  padding: 2rem 2rem;
  width: 40rem;
  max-width: 80%;
  margin: 8rem auto;
  box-sizing: border-box;

  h1 {
    margin-top: 0;
    margin-bottom: 1rem;
    text-align: center;
    color: #e78200;
  }
  .form-item input {
    width: 100%;
    margin: 0.4rem 0px;
  }
  button {
    border: 2px solid #e78200;
    color: #e78200;
    background: white;
    margin-top: 0.5rem;
    padding: 4px 0;
    cursor: pointer;
    width: 100%;
    align-items: center;
  }

  button:hover,
  button:active {
    color: white;
    background: #e78200;
  }
`;
