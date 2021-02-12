const passport = require('passport');

const redirectUrl = process.env.NODE_ENV === 'production' ? '/' : 'http://localhost:3000';

exports.config = (router) => {
  router.get('/login', passport.authenticate('discord', { display: 'popup' }));

  router.get('/login/callback', passport.authenticate('discord', { successRedirect: redirectUrl, failureRedirect: redirectUrl }));

  router.get('/user', (req, res) => {
    res.status(200).json(req.user);
  });

  router.get('/logout', (req, res) => {
    req.logout();
    res.redirect(redirectUrl);
  });
};
