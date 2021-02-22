const mongoose = require('mongoose');

const { Schema } = mongoose;

const challengeSchema = new Schema({
  battleId: {
    type: String,
    required: true,
  },
  token: {
    type: String,
    required: true,
  },
  players: {
    type: [{
      profileId: {
        type: String,
        required: true,
      },
      nick: {
        type: String,
        required: true,
      },
      guesses: [{
        roundScoreInPoints: {
          type: Number,
          required: true,
        },
      }],
    }],
    default: [],
  },
});

challengeSchema.set('toJSON', {
  virtuals: true,
});

module.exports = mongoose.model('Challenges', challengeSchema, 'challenges');
