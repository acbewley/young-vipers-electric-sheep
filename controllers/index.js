const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const dreamRoutes = require('./dreamRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/dreams', dreamRoutes);

module.exports = router;
