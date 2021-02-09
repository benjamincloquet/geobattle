import React, { useContext } from 'react';
import { UserContext } from '../userContext';

const App = () => {
  const { user } = useContext(UserContext);

  return <div>{user?.loggedIn ? 'Logged in!' : 'Not logged in'}</div>;
};

export default App;
