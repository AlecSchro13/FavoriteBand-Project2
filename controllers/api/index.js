const router = require('express').Router();

const userRoutes = require('./user-routes');
const artistRoutes = require('./artist-routes');

router.use('/users', userRoutes);
router.use('/artist', artistRoutes);

module.exports = router;
