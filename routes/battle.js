const {
  createBattle, getBattles, createChallenge, getBattle, getChallenges,
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
      res.status(503).json({ error: "Couldn't create battle" });
    }
  });

  router.post('/challenge', async (req, res) => {
    try {
      const { profile, params } = req.body;
      const challenge = await createChallenge({ profile, params });
      res.status(200).json({ challenge });
    } catch (error) {
      res.status(503).json({ error: "Couldn't create battle" });
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
      res.status(503).json({ error: "Couldn't create battle" });
    }
  });

  router.get('/challenges', async (req, res) => {
    try {
      const { battleId } = req.query;
      const challenges = await getChallenges({ battleId });
      res.status(200).json({ challenges });
    } catch (error) {
      console.log(error);
      res.status(503).json({ error: "Couldn't create battle" });
    }
  });
};
