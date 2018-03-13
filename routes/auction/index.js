var router = require('express').Router();
router.get('/', require('./list.js'));
router.post('/create', require('./create.js'));
router.post('/update', require('./update.js'));
module.exports = router;