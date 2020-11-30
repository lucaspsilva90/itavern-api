var express = require('express');
var router = express.Router();
const UserController = require('../controllers/UserController');

/* GET users listing. */
router.get('/', UserController.list);
router.post('/', UserController.storage);
router.get('/a', UserController.storage);

module.exports = router;
