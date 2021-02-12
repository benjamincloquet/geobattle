import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { useUser } from '../../userContext';

const LinkedUserRoute = ({ path, children }) => {
  const { user } = useUser();

  const renderRoute = () => (user.geoGuessrAccountId ? { children } : <Redirect to="/dashboard/link" />);

  return (
    <Route path={path}>
      {user ? renderRoute() : <p>Loading ...</p>}
    </Route>
  );
};

LinkedUserRoute.propTypes = {
  path: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default LinkedUserRoute;
