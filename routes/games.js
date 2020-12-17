var express = require('express');
var router = express.Router();
const GameController = require('../controllers/GameController');

router.post('/', GameController.store);

module.exports = router;