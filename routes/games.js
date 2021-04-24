const express = require('express');

const router = express.Router();
const GameController = require('../controllers/GameController');

router.get('/', GameController.list);
router.post('/', GameController.store);
router.delete('/:id', GameController.delete);
router.put('/:id', GameController.updateById);

module.exports = router;
