var router = require('express').Router();
const service = require('../../services')

router.get('/', function (req, res) {
    console.log(service.getAuctions())
    res.json(service.getAuctions());
});

module.exports = router;