const mongoose = require('mongoose');

exports.connectToDatabase = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    })
    .then(() => console.log('Successfully connected to database !'))
    .catch((err) => console.error(err));
};

exports.isConnectedToDatabase = (req, res, next) => {
  if (mongoose.connection.readyState === 1) {
    next();
  } else {
    res.status(503).json({ error: "Couldn't connect to database" });
  }
};
