import React from 'react';
import PropTypes from 'prop-types';
import Avatar from './Avatar';
import useFetchResults from '../useFetchResults';

const Challenge = ({ challenge }) => {
  const { results, ranking } = useFetchResults(challenge);

  const getRankColor = (rank) => {
    switch (rank) {
      case 1: return 'bg-yellow-400';
      case 2: return 'bg-gray-400';
      case 3: return 'bg-yellow-600';
      default: return 'bg-gray-900';
    }
  };

  const renderRoundScore = (profileId) => (guess, roundIndex) => {
    const playerRanking = ranking?.[profileId];
    const rank = playerRanking?.ranks[roundIndex] ?? 0;
    const rankColor = getRankColor(rank);
    return (
      <td className="py-3 px-1">
        {guess ? (
          <div className="flex justify-between">
            <p>{`${guess.roundScoreInPoints} points`}</p>
            <span className={`${rankColor} text-white px-1.5 mr-10 rounded-full text-sm self-center`}>{rank}</span>
          </div>
        ) : null}
      </td>
    );
  };

  const renderEmptyCells = (number) => {
    const emptyCells = [];
    for (let cellIndex = 0; cellIndex < number; cellIndex += 1) {
      emptyCells.push(<td className="py-3 px-1" />);
    }
    return emptyCells;
  };

  const renderResult = (result) => (
    <tr className="border-b border-gray-200 hover:bg-gray-100">
      <td className="py-3 px-6 text-left">
        <div className="flex items-center">
          <div className="mr-2">
            <Avatar className="w-6 h-6 rounded-full" avatarUrl={result.player.avatarUrl} />
          </div>
          <span>{result.player.nick}</span>
        </div>
      </td>
      {result.guesses.map(renderRoundScore(result.player.profileId))}
      {renderEmptyCells(challenge.roundCount - result.guesses.length)}
      <td className="py-3 px-6 text-center">
        {ranking?.[result.player.profileId].score ?? 0}
      </td>
    </tr>
  );

  const renderResults = () => results.map(renderResult);

  const renderRoundHeaders = () => {
    const roundHeaders = [];
    for (let roundIndex = 0; roundIndex < challenge.roundCount; roundIndex += 1) {
      roundHeaders.push(<th className="py-3 px-6 text-left">{`Round #${roundIndex + 1}`}</th>);
    }
    return roundHeaders;
  };

  const renderChallenge = () => (
    <div className="bg-white shadow-md rounded my-6">
      <a href={`https://www.geoguessr.com/challenge/${challenge.token}`}><h1 className="px-2 py-8 text-xl md:text-2xl">{challenge.map.name}</h1></a>
      <table className="table-auto w-full">
        <thead>
          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">Player</th>
            {renderRoundHeaders()}
            <th className="py-3 px-6 text-center">Score</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {renderResults()}
        </tbody>
      </table>
    </div>
  );

  return results ? renderChallenge() : <p>Loading...</p>;
};

Challenge.propTypes = {
  challenge: PropTypes.shape({
    token: PropTypes.string,
    roundCount: PropTypes.number,
    map: PropTypes.shape({
      name: PropTypes.string,
    }),
  }).isRequired,
};

export default Challenge;
