import React from 'react';
import Login from './Login';
import './LoginPage.scss';

const LoginPage = () => (
  <section className="login-page">
    <h1 className="login-page__title">Log In to start battling !</h1>
    <Login />
  </section>
);

export default LoginPage;
