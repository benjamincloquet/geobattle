const router = require('express').Router();

require('./login').config(router);
require('./battle').config(router);

module.exports = router;
