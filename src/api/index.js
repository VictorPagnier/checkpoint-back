const { Router } = require('express');
const games = require('./games/games.routes');
const reviews = require('./reviews/reviews.routes');
const categories = require('./categories/categories.routes');

const router = Router();

router.use('/games', games);
router.use('/reviews', reviews);
router.use('/categories', categories);

module.exports = router;
