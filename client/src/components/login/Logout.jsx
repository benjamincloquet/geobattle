import React from 'react';
import './Logout.scss';

const Logout = () => (
  <a href="/api/logout" className="logout">
    <div className="logout__button">
      <p className="logout__text">Log Out</p>
    </div>
  </a>
);

export default Logout;
