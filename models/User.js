const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  discordAccount: {
    name: {
      type: String,
      required: true,
    },
  },
  geoguessrAccount: {
    id: {
      type: String,
      required: true,
    },
  },
});

userSchema.set('toJSON', {
  virtuals: true,
});

module.exports = mongoose.model('Users', userSchema, 'users');
