const { Router } = require('express');

const getOne = require('./getOne');
const getAll = require('./getAll');
const getAllCategoriesGames = require('./getAllCategoriesGames');

const router = Router();

router.get('/', getAll);
router.get('/:id', getOne);
router.get('/:id/:id', getAllCategoriesGames);

module.exports = router;
