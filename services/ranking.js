const hasPlayedRound = (roundIndex) => (player) => player.guesses.length > roundIndex;

const getPlayerScore = (roundIndex) => (player) => player.guesses[roundIndex].roundScoreInPoints;

const getRoundPlayerScores = (challenge, roundIndex) => challenge.players.filter(hasPlayedRound(roundIndex)).map(getPlayerScore(roundIndex));

const comparePlayerScores = (scoreA, scoreB) => scoreB - scoreA;

const rankReducer = (scoreToRank, score, index) => ({ ...scoreToRank, [score]: index + 1 });

exports.updatePlayerRanks = (challenge) => {
  const challengeScoreRanks = [];
  for (let roundIndex = 0; roundIndex < challenge.roundCount; roundIndex += 1) {
    const roundScores = getRoundPlayerScores(challenge, roundIndex);
    const roundScoreRanks = roundScores.slice().sort(comparePlayerScores).reduceRight(rankReducer, {});
    challengeScoreRanks.push(roundScoreRanks);
  }
  return challenge.players.map((player) => ({
    ...player,
    guesses: player.guesses.map((guess, roundIndex) => ({ ...guess, rank: challengeScoreRanks[roundIndex][guess.roundScoreInPoints] })),
  }));
};
