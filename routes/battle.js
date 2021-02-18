const { create } = require('../services/battle');

exports.config = (router) => {
  router.post('/battle', async (req, res) => {
    try {
      const battle = await create();
      res.status(200).json({ battle });
    } catch (error) {
      res.status(503).json({ error: "Couldn't create battle" });
    }
  });
};
