const { Router } = require('express');

const getAll = require('./getAll');
const getAllGamesReviews = require('./getAllGamesReviews');
const getOne = require('./getOne');
const postGame = require('./postGame');
const updateGame = require('./updateGame');
const deleteGame = require('./deleteGame');

const router = Router();

router.get('/', getAll);
router.get('/:id', getOne);
router.get('/:id/reviews', getAllGamesReviews);
router.post('/', postGame);
router.put('/:id', updateGame);
router.delete('/:id', deleteGame);

module.exports = router;
