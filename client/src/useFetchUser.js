import { useEffect } from 'react';
import axios from 'axios';
import { useUser } from './userContext';

export default () => {
  const { dispatchUser } = useUser();

  useEffect(async () => {
    try {
      const res = await axios.get('/api/user');
      const {
        discordAccount: {
          username,
        },
      } = res.data;
      dispatchUser({
        type: 'set',
        payload: {
          username, isLoggedIn: true,
        },
      });
    } catch (err) {
      dispatchUser({
        type: 'set',
        payload: { isLoggedIn: false },
      });
    }
  }, []);
};
