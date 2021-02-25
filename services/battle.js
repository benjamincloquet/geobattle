const Battle = require('../models/Battle');
const Challenge = require('../models/Challenge');
const { updatePlayerRanks } = require('./ranking');

exports.createBattle = async ({ profile: { id }, params: { battleName } }) => Battle.create({ profileId: id, name: battleName });

exports.getBattles = async ({ profileId }) => Battle.find({ $or: [{ profileId }, { players: profileId }] }).select('id name');

exports.createChallenge = async ({ params: { battleId, token, map } }) => Challenge.create({ battleId, token, map });

exports.getBattle = async ({ battleId }) => Battle.findById(battleId);

exports.getChallenges = async ({ battleId }) => Challenge.find({ battleId });

exports.joinBattle = async ({ profile: { id }, params: { battleId } }) => {
  const battle = await Battle.findById(battleId);
  if (battle.profileId !== id && !battle.players.includes(id)) {
    battle.players.push(id);
  }
  await battle.save();
  return battle;
};

exports.getPlayerChallenges = async ({ profileId }) => {
  const battleIds = (await exports.getBattles({ profileId })).map(({ id }) => id);
  return Challenge.find({ battleId: { $in: battleIds } });
};

exports.hasPlayerJoinedChallenge = async ({ profileId, token }) => {
  const challenges = await exports.getPlayerChallenges({ profileId });
  return challenges.find((challenge) => challenge.token === token);
};

exports.addResult = async ({ result, token }) => {
  const challenge = await Challenge.findOne({ token });
  const player = {
    ...result.player,
    profileId: result.player.id,
  };
  const playerIndex = challenge.players.findIndex((existingPlayer) => existingPlayer.profileId === result.player.id);
  if (playerIndex !== -1) {
    challenge.players[playerIndex] = player;
  } else {
    challenge.players.push(player);
  }
  challenge.players = updatePlayerRanks(challenge.toObject());
  return challenge.save();
};

exports.challengeExists = async ({ battleId, token }) => {
  const challenges = await exports.getChallenges({ battleId });
  return challenges.find((challenge) => challenge.token === token);
};
