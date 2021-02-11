const passport = require('passport');

exports.config = (router) => {
  router.get('/login', passport.authenticate('discord'));

  router.get('/login/callback', passport.authenticate('discord', { successRedirect: '/api/user', failureRedirect: '/' }));

  router.get('/user', (req, res) => {
    console.log(req.isAuthenticated());
    res.status(200).json(req.user);
  });

  router.get('/logout', (req, res) => {
    req.logout();
    res.sendStatus(200);
  });
};
