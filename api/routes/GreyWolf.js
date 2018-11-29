const router = require('express').Router();
const greyWolf = require('../core/GreyWolfOptimizer');

router.post('/', async (req, res) => {
  const problem = req.body;
  const result = greyWolf(problem);
  res.send(result);
});

module.exports = router;
