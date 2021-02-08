import { useContext, useEffect } from 'react';
import axios from 'axios';
import { UserContext } from './userContext';

const useUser = () => {
  const { setUser } = useContext(UserContext);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get('/api/user');
        const { username, avatar, id } = res.data;
        setUser({
          username, avatar, id, loggedIn: true,
        });
      } catch (err) {
        setUser({
          loggedIn: false,
        });
      }
    };
    fetchUser();
  }, [setUser]);
};

export default useUser;
