import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { useUser } from '../../userContext';

const UserRoute = ({ path, children }) => {
  const { user } = useUser();

  const renderRoute = () => (user.isLoggedIn ? children : <Redirect to="/login" />);

  return (
    <Route path={path}>
      {user ? renderRoute() : <p>Loading ...</p>}
    </Route>
  );
};

UserRoute.propTypes = {
  path: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default UserRoute;
