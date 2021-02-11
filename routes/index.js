const router = require('express').Router();

require('./login').config(router);
require('./link').config(router);

module.exports = router;
