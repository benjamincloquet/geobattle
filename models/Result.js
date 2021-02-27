const mongoose = require('mongoose');

const { Schema } = mongoose;

const resultSchema = new Schema({
  player: {
    profileId: {
      type: String,
      required: true,
    },
    nick: {
      type: String,
      required: true,
    },
    avatarUrl: {
      type: String,
      required: true,
    },
  },
  challengeToken: {
    type: String,
    required: true,
  },
  guesses: [{
    roundScoreInPoints: {
      type: Number,
      required: true,
    },
  }],
});

resultSchema.set('toJSON', {
  virtuals: true,
});

module.exports = mongoose.model('Results', resultSchema, 'results');
