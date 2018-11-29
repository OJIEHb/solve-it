const router = require('express').Router();

router.get('/', async (req, res) => {
  res.send({message: 'hello'});
});

module.exports = router;

