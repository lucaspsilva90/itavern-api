var express = require('express');
var router = express.Router();
const GameController = require('../controllers/GameController');

router.get('/', GameController.list);
router.post('/', GameController.store);
router.delete('/:id', GameController.delete);
router.patch('/:id', GameController.updateById);

module.exports = router;