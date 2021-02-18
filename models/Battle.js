const mongoose = require('mongoose');

const { Schema } = mongoose;

const battleSchema = new Schema({

});

battleSchema.set('toJSON', {
  virtuals: true,
});

module.exports = mongoose.model('Battles', battleSchema, 'battles');
