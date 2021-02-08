import { useContext } from "react";
import React, {useContext} from "react";
import { UserContext } from './UserContext';

const App = () => {
  const {user} = useContext();
  return <div>{user.loggedIn ? "Logged in" : "Not logged in"}</div>
}

export default App;