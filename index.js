const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const dotenv = require('dotenv');
const morgan = require('morgan');
const { connectToDatabase, isConnectedToDatabase } = require('./services/database');
const routes = require('./routes');

const start = async () => {
  const app = express();
  app.use(cors());
  app.options('*', cors());
  app.use(bodyParser.json());

  if (process.env.NODE_ENV === 'development') {
    dotenv.config();
    app.use(morgan('dev'));
  }

  console.log(`Starting the server in ${process.env.NODE_ENV} mode`);

  try {
    await connectToDatabase();
  } catch (err) {
    console.log(err);
  }

  app.use(isConnectedToDatabase);
  app.use('/api', routes);

  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, './client/build')));
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, './client/build/index.html'));
    });
  }

  app.listen(process.env.PORT, () => {
    console.log(`Server started in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`);
  });
};

start();
