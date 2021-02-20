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
});

challengeSchema.set('toJSON', {
  virtuals: true,
});

module.exports = mongoose.model('Challenges', challengeSchema, 'challenges');
