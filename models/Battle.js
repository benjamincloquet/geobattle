const mongoose = require('mongoose');

const { Schema } = mongoose;

const battleSchema = new Schema({
  profileId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  players: [String],
});

battleSchema.set('toJSON', {
  virtuals: true,
});

module.exports = mongoose.model('Battles', battleSchema, 'battles');
