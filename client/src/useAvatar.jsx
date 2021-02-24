import { useState, useEffect } from 'react';
import axios from 'axios';

export default (profileId) => {
  const [avatar, setAvatar] = useState(null);

  useEffect(async () => {
    const { data: { pin: { url } } } = await axios.get(`https://www.geoguessr.com/api/v3/users/${profileId}`);
    setAvatar(`https://www.geoguessr.com/images/auto/144/144/ce/0/plain/${url}`);
  });

  return avatar;
};
