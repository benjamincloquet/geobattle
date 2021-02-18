const mongoose = require('mongoose');

exports.connectToDatabase = () => new Promise((resolve, reject) => {
  mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
    .then(() => {
      console.log('Successfully connected to database !');
      resolve();
    })
    .catch((err) => reject(err));
});

exports.isConnectedToDatabase = (req, res, next) => {
  if (mongoose.connection.readyState === 1) {
    next();
  } else {
    throw new Error();
  }
};
