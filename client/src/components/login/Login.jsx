import React from 'react';
import './Login.scss';

const Login = () => (
  <a href="/api/login" className="login">
    <div className="login__button">
      <p className="login__text">Log In With Discord</p>
    </div>
  </a>
);

export default Login;
