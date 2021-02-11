const User = require('../models/User');

module.exports = async (userId, accountId) => {
  const user = await User.findById(userId);
  user.geoGuessrAccountId = accountId;
  user.save();
};
