const passport = require('passport');
const DiscordStrategy = require('passport-discord').Strategy;
const User = require('../models/User');

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

  const createUser = async ({ id, username }) => User.create({ discordAccount: { id, username } });

  passport.use(new DiscordStrategy(options, async (accessToken, refreshToken, profile, done) => {
    try {
      const user = await User.findOne({ 'discordAccount.id': profile.id });
      if (user) {
        console.log('found user!');
        done(null, user);
      } else {
        console.log('creating user!');
        done(null, await createUser(profile));
      }
    } catch (err) {
      done(err);
    }
  }));

  app.use(passport.initialize());
  app.use(passport.session());
};
