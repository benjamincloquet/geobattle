const mongoose = require('mongoose');

const { Schema } = mongoose;

const challengeSchema = new Schema({
  battleId: { type: Schema.Types.ObjectId, ref: 'Battle' },
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
});

challengeSchema.set('toJSON', {
  virtuals: true,
});

module.exports = mongoose.model('Challenges', challengeSchema, 'challenges');
