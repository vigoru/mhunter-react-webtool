const router = require('express').Router();

router.use('/auth', require('./auth'));
router.use('/user', require('./user'));

// https://blog.logrocket.com/the-essential-guide-for-designing-a-production-ready-developer-friendly-restful-api/

module.exports = router;
