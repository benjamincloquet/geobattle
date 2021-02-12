import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { useUser } from '../../userContext';

const LinkedUserRoute = ({ path, component: Component, fallback: Fallback }) => {
  const { user } = useUser();

  const renderRoute = () => (
    <Route
      path={path}
      render={() => (user.geoGuessrAccountId ? <Component /> : <Fallback />)}
    />
  );

  return user ? renderRoute() : <p>Loading...</p>;
};

LinkedUserRoute.propTypes = {
  path: PropTypes.string.isRequired,
  component: PropTypes.elementType.isRequired,
  fallback: PropTypes.elementType.isRequired,
};

export default LinkedUserRoute;
