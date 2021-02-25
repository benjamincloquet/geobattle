import React from 'react';
import { useParams } from 'react-router-dom';
import useFetchBattle from '../useFetchBattle';
import Avatar from './Avatar';

const Battle = () => {
  const { battleId } = useParams();
  const { battle, challenges } = useFetchBattle(battleId);

  const renderPlayer = (player) => (
    <tr className="border-b border-gray-200 hover:bg-gray-100">
      <td className="py-3 px-6 text-left">
        <div className="flex items-center">
          <div className="mr-2">
            <Avatar className="w-6 h-6 rounded-full" profileId={player.profileId} />
          </div>
          <span>{player.nick}</span>
        </div>
      </td>
      {player.guesses.map((guess) => (
        <td className="py-3 px-6 text-left">
          {`${guess.roundScoreInPoints} points`}
          <span className={`${guess.rank === 1 ? 'bg-yellow-400' : 'bg-gray-900'} text-white px-1.5 ml-2 rounded-full text-sm`}>{guess.rank}</span>
        </td>
      ))}
    </tr>
  );

  const renderChallenge = (challenge) => (
    <div className="bg-white shadow-md rounded my-6">
      <a href={`https://www.geoguessr.com/challenge/${challenge.token}`}><h1 className="px-2 py-8 text-xl md:text-2xl">{challenge.map.name}</h1></a>
      <table className="table-auto w-full">
        <thead>
          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">Player</th>
            <th className="py-3 px-6 text-left">Round #1</th>
            <th className="py-3 px-6 text-left">Round #2</th>
            <th className="py-3 px-6 text-left">Round #3</th>
            <th className="py-3 px-6 text-left">Round #4</th>
            <th className="py-3 px-6 text-left">Round #5</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {challenge.players.map(renderPlayer)}
        </tbody>
      </table>
    </div>
  );

  const renderChallengeTable = () => (challenges.length > 0 ? (challenges.map(renderChallenge)) : null);

  const renderBattle = () => (
    <div className="bg-gray-100 text-gray-900 tracking-wider leading-normal min-h-screen flex-col items-center justify-start">
      <div className="container w-full md:w-4/5 xl:w-3/5  mx-auto px-2">
        <h1 className="px-2 py-8 text-xl md:text-2xl">{battle.name}</h1>
        {renderChallengeTable()}
      </div>
    </div>
  );

  return battle && challenges ? renderBattle() : <p>Loading...</p>;
};

export default Battle;
