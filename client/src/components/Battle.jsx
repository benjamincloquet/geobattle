import React from 'react';
import { useParams } from 'react-router-dom';
import useFetchBattle from '../useFetchBattle';
import Challenge from './Challenge';

const Battle = () => {
  const { battleId } = useParams();
  const { battle, challenges } = useFetchBattle(battleId);

  const renderChallenges = () => (challenges.length > 0 ? (challenges.map((challenge) => <Challenge challenge={challenge} />)) : null);

  const renderBattle = () => (
    <div className="bg-gray-100 text-gray-900 tracking-wider leading-normal min-h-screen flex-col items-center justify-start">
      <div className="container w-full md:w-4/5 xl:w-3/5  mx-auto px-2">
        <h1 className="px-2 py-8 text-xl md:text-2xl">{battle.name}</h1>
        {renderChallenges()}
      </div>
    </div>
  );

  return battle && challenges ? renderBattle() : <p>Loading...</p>;
};

export default Battle;
