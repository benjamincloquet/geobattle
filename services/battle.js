const Battle = require('../models/Battle');
const Challenge = require('../models/Challenge');

exports.createBattle = async ({ profile: { id }, params: { battleName } }) => Battle.create({ profileId: id, name: battleName });

exports.getBattles = async ({ profileId }) => Battle.find({ profileId }, 'id name');

exports.createChallenge = async ({ params: { battleId, token } }) => Challenge.create({ battleId, token });

exports.getBattle = async ({ battleId }) => Battle.findById(battleId);

exports.getChallenges = async ({ battleId }) => Challenge.find({ battleId });
