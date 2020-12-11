var express = require('express');
var router = express.Router();
const UserController = require('../controllers/UserController');

router.get('/', UserController.list);
router.get('/search', UserController.searchActivatedUsersByParam);
router.post('/', UserController.store);
router.patch('/:id', UserController.updateById);
router.delete('/:id', UserController.delete);

module.exports = router;
