import { useState, useEffect } from 'react';
import axios from 'axios';
import useRanking from './useRanking';

export default (challenge) => {
  const [rawResults, setRawResults] = useState(null);
  const [sortedResults, setSortedResults] = useState(null);
  const { ranking } = useRanking(challenge, rawResults);

  const fetchResults = async () => {
    const resultsRes = await axios.get('/api/results', { params: { challengeToken: challenge.token } });
    setRawResults(resultsRes.data.results);
  };

  useEffect(async () => {
    await fetchResults();
  }, []);

  useEffect(() => {
    if (rawResults && ranking) {
      const newSortedResults = [...rawResults];
      newSortedResults.sort((resultA, resultB) => ranking?.[resultB.player.profileId].score - ranking?.[resultA.player.profileId].score);
      console.log(newSortedResults);
      setSortedResults(newSortedResults);
    }
  }, [ranking]);

  return {
    results: sortedResults, ranking, refresh: fetchResults,
  };
};
