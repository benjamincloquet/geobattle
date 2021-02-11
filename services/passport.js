const passport = require('passport');
const DiscordStrategy = require('passport-discord').Strategy;

exports.configure = (app) => {
  const options = {
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: process.env.CLIENT_CALLBACK_URL,
    scope: ['identify'],
  };

  passport.serializeUser((user, done) => {
    done(null, user);
  });

  passport.deserializeUser((user, done) => {
    done(null, user);
  });

  passport.use(new DiscordStrategy(options, (accessToken, refreshToken, profile, done) => done(null, profile)));

  app.use(passport.initialize());
  app.use(passport.session());
};
