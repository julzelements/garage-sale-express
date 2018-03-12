var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/auctions', function(req, res, next) {
  res.send('oh hai there');
});

module.exports = router;