import { useContext, useEffect } from 'react';
import axios from 'axios';
import { UserContext } from './userContext';

export default () => {
  const { setUser } = useContext(UserContext);

  useEffect(async () => {
    try {
      const res = await axios.get('/api/user');
      console.log(res);
      const { username, avatar, id } = res.data;
      setUser({
        username, avatar, id, loggedIn: true,
      });
    } catch (err) {
      setUser({
        loggedIn: false,
      });
    }
  }, []);
};
