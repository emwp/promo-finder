import React from 'react';
import styled from 'styled-components';

const Login = () => {
  return (
    <FormWrapper>
      <div>
        <h1>Login</h1>
      </div>
      <div className="form-item">
        <input type="email" placeholder="Email" />
      </div>
      <div className="form-item">
        <input type="password" placeholder="Password" />
      </div>
      <div>
        <button type="submit">Sign In</button>
        <button type="submit">Register</button>
      </div>
    </FormWrapper>
  );
};

export default Login;

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
    width: 100%;
    margin: 0.4rem 0px;
    box-sizing: border-box;
    border-radius: 3px;
    padding: 10px 10px;
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
  }

  button:hover,
  button:active {
    color: white;
    background: #fe6756;
  }
`;
