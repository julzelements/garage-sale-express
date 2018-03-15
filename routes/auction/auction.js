var router = require('express').Router(),
    service = require('../../services')

router.get('/', (req, res) => {
    res.json(service.getAllAuctions());
});


router.post('/create', (req, res) => {
    res.json("create");
});

router.post('/update', (req, res) => {
    res.json("update");
});

router.post('/buy', (req, res) => {
    res.json("buy");
});

router.post('/delete', (req, res) => {
    res.json("delete");
});

module.exports = router;