import { useState, useEffect } from 'react';

export default (challenge, results) => {
  const [ranking, setRanking] = useState(null);

  const hasPlayedRound = (roundIndex) => (result) => result.guesses.length > roundIndex;

  const getRoundResult = (roundIndex) => (result) => ({ profileId: result.player.profileId, score: result.guesses[roundIndex].roundScoreInPoints });

  const getRoundResults = (roundIndex) => results.filter(hasPlayedRound(roundIndex)).map(getRoundResult(roundIndex));

  const compareResults = (resultA, resultB) => resultB.score - resultA.score;

  // eslint-disable-next-line no-unused-vars
  const rankReducer = (numberOfPlayers) => (currentRanking, result, index) => {
    const rank = index + 1;
    const addedScore = numberOfPlayers - rank;
    const updatedRanking = { ...currentRanking };
    if (!updatedRanking[result.profileId]) {
      updatedRanking[result.profileId] = { ranks: [], score: 0 };
    }
    updatedRanking[result.profileId].ranks.push(rank);
    updatedRanking[result.profileId].score += addedScore;
    return updatedRanking;
  };

  useEffect(() => {
    if (challenge && results) {
      let newRanking = {};
      for (let roundIndex = 0; roundIndex < challenge.roundCount; roundIndex += 1) {
        const roundResults = getRoundResults(roundIndex);
        newRanking = roundResults.slice().sort(compareResults).reduceRight(rankReducer(roundResults.length), newRanking);
      }
      setRanking(newRanking);
    }
  }, [challenge, results]);

  return {
    ranking,
  };
};
