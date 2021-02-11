const isAuthenticated = require('./middleware/isAuthenticated');
const linkAccount = require('../services/linkAccount');

exports.config = (router) => {
  router.post('/link', isAuthenticated, (req, res) => {
    try {
      console.log(req);
      linkAccount(req.user.id, 'a');
      res.status(200);
    } catch (error) {
      res.status(503).send({ error });
    }
  });
};
