const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  discordAccount: {
    id: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
  },
  geoguessrAccountId: {
    type: String,
  },
});

userSchema.set('toJSON', {
  virtuals: true,
});

module.exports = mongoose.model('Users', userSchema, 'users');
