import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { useUser } from '../../userContext';

const UserRoute = ({ component: Component, fallback: Fallback }) => {
  const { user } = useUser();

  const renderRoute = () => (
    <Route
      render={() => (user.isLoggedIn ? <Component /> : <Fallback />)}
    />
  );

  return user ? renderRoute() : <p>Loading...</p>;
};

UserRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
  fallback: PropTypes.elementType.isRequired,
};

export default UserRoute;
