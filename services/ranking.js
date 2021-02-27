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
  for (player of challenge.players) {
    for (let roundIndex = 0; roundIndex < player.guesses.length; roundIndex += 1) {
      const guess = player.guesses[roundIndex];
      guess.rank = challengeScoreRanks[roundIndex][guess.roundScoreInPoints];
    }
  }
};
