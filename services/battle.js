const Battle = require('../models/Battle');
const Challenge = require('../models/Challenge');
const Result = require('../models/Result');

const createBattle = async ({ profile: { id }, params: { battleName } }) => Battle.create({ profileId: id, name: battleName });

const getBattles = async ({ profileId }) => Battle.find({ $or: [{ profileId }, { players: profileId }] }).select('id name');

const createChallenge = async ({ params: { battleId, token, map } }) => Challenge.create({ battleId, token, map });

const getBattle = async ({ battleId }) => Battle.findById(battleId);

const getChallenges = async ({ battleId }) => Challenge.find({ battleId });

const joinBattle = async ({ profile: { id }, params: { battleId } }) => {
  const battle = await Battle.findById(battleId);
  if (battle.profileId !== id && !battle.players.includes(id)) {
    battle.players.push(id);
  }
  await battle.save();
  return battle;
};

const getPlayerChallenges = async ({ profileId }) => {
  const battleIds = (await getBattles({ profileId })).map(({ id }) => id);
  return Challenge.find({ battleId: { $in: battleIds } });
};

const hasPlayerJoinedChallenge = async ({ profileId, token }) => {
  const challenges = await getPlayerChallenges({ profileId });
  return challenges.find((challenge) => challenge.token === token);
};

const createResult = async (result) => Result.create(result);

const getResult = async ({ result }) => {
  const { challengeToken, player: { profileId } } = result;
  const existingResult = await Result.findOne({ 'player.profileId': profileId, challengeToken });
  return existingResult;
};

const getLastGuess = ({ result: { guesses } }) => {
  const { roundScoreInPoints } = guesses.pop();
  return {
    roundScoreInPoints,
  };
};

const addResult = async ({ newResult }) => {
  const result = await getResult({ result: newResult });
  if (result) {
    const lastGuess = getLastGuess({ result: newResult });
    result.guesses.push(lastGuess);
    result.save();
  } else {
    await createResult(newResult);
  }
};

const challengeExists = async ({ battleId, token }) => {
  const challenges = await getChallenges({ battleId });
  return challenges.find((challenge) => challenge.token === token);
};

const getResults = async ({ challengeToken }) => Result.find({ challengeToken });

module.exports = {
  createBattle,
  getBattles,
  createChallenge,
  getBattle,
  getChallenges,
  joinBattle,
  getPlayerChallenges,
  hasPlayerJoinedChallenge,
  getResult,
  addResult,
  challengeExists,
  getResults,
};
