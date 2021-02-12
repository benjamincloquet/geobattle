import React from 'react';
import Login from '../login/Login';
import './LoginPrompt.scss';

const LoginPrompt = () => (
  <div className="login-prompt">
    <p className="login-prompt__text">Log in to start playing !</p>
    <Login />
  </div>
);

export default LoginPrompt;
