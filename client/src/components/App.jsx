import React, { useContext } from 'react';
import useUser from '../useUser';
import { UserContext } from '../userContext';

const App = () => {
  const { user } = useContext(UserContext);
  useUser();

  return <div>{user?.loggedIn ? 'Logged in!' : 'Not logged in'}</div>;
};

export default App;
