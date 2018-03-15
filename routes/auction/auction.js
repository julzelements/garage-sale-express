var router = require('express').Router();
const service = require('../../services')

router.get('/', function (req, res) {
    res.json("test");
});

module.exports = router;