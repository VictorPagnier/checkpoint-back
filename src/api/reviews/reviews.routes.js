const { Router } = require('express');

const getAll = require('./getAll');

const router = Router();

router.get('/', getAll);

module.exports = router;
