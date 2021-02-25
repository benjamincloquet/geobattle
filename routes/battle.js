const {
  createBattle, getBattles, createChallenge, getBattle, getChallenges, joinBattle, hasPlayerJoinedChallenge, addResult, challengeExists,
} = require('../services/battle');

exports.config = (router) => {
  router.post('/battle', async (req, res) => {
    try {
      const { profile, params } = req.body;
      const battle = await createBattle({ profile, params });
      res.status(200).json({ battle });
    } catch (error) {
      res.status(503).json({ error: "Couldn't create battle" });
    }
  });

  router.get('/battles', async (req, res) => {
    try {
      const { profileId } = req.query;
      const battles = await getBattles({ profileId });
      res.status(200).json({ battles });
    } catch (error) {
      console.log(error);
      res.status(503).json({ error: "Couldn't get battle" });
    }
  });

  router.post('/challenge', async (req, res) => {
    try {
      const { profile, params } = req.body;
      if (await challengeExists(params)) {
        res.status(401).json({ error: 'Duplicate challenge' });
      } else {
        const challenge = await createChallenge({ profile, params });
        res.status(200).json({ challenge });
      }
    } catch (error) {
      res.status(503).json({ error: "Couldn't create challenge" });
    }
  });

  router.get('/battle', async (req, res) => {
    try {
      const { battleId } = req.query;
      const battle = await getBattle({ battleId });
      const challenges = await getChallenges({ battleId });
      res.status(200).json({ battle, challenges });
    } catch (error) {
      console.log(error);
      res.status(503).json({ error: "Couldn't get battle" });
    }
  });

  router.get('/challenges', async (req, res) => {
    try {
      const { battleId } = req.query;
      const challenges = await getChallenges({ battleId });
      res.status(200).json({ challenges });
    } catch (error) {
      console.log(error);
      res.status(503).json({ error: "Couldn't get challenges" });
    }
  });

  router.post('/join', async (req, res) => {
    try {
      const { profile, params } = req.body;
      const battle = await joinBattle({ profile, params });
      res.status(200).json({ battle });
    } catch (error) {
      res.status(503).json({ error: "Couldn't join battle" });
    }
  });

  router.post('/joined', async (req, res) => {
    try {
      const { profileId, token } = req.body;
      if (await hasPlayerJoinedChallenge({ profileId, token })) {
        res.status(200).json({});
      } else {
        res.status(401).json({ error: 'Must join a battle before playing the challenge' });
      }
    } catch (error) {
      console.log(error);
      res.status(503).json({ error: "Couldn't get challenges" });
    }
  });

  router.post('/result', async (req, res) => {
    try {
      const { player, token } = req.body;
      const battle = await addResult({ player, token });
      res.status(200).json({ battle });
    } catch (error) {
      console.log(error);
      res.status(503).json({ error: "Couldn't join battle" });
    }
  });
};
