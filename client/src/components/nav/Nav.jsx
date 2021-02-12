import React from 'react';
import { Link } from 'react-router-dom';
import Login from '../login/Login';
import Logout from '../login/Logout';
import { useUser } from '../../userContext';
import './Nav.scss';

const Nav = () => {
  const { user } = useUser();

  const renderLogout = () => (
    <div className="user">
      <p className="user__username">{user.username}</p>
      <Logout />
    </div>
  );

  const renderUser = () => (user.isLoggedIn ? renderLogout() : <Login />);

  return (
    <nav>
      <div className="left"><Link to="/"><h1>GeoBattle</h1></Link></div>
      <div className="right">
        {user ? renderUser() : <p className="loader">Loading...</p>}
      </div>
    </nav>
  );
};

export default Nav;
