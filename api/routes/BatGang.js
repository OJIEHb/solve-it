const router = require('express').Router();
const batGang = require('../core/BatGangOptimizer');

router.post('/', async (req, res) => {
  const problem = req.body;
  const result = batGang(problem);
  res.send(result);
});

module.exports = router;
