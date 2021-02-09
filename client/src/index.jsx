import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { UserProvider } from './userContext';

ReactDOM.render(
  <UserProvider>
    <App />
  </UserProvider>,
  document.getElementById('root'),
);
