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
  roundCount: {
    type: Number,
    default: 5,
  },
  map: {
    name: {
      type: String,
      default: '',
    },
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
        rank: {
          type: Number,
          default: 0,
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
