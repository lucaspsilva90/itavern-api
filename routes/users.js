const express = require('express');
const UserController = require('../controllers/UserController');

const router = express.Router();

router.get('/', UserController.list);
router.get('/search', UserController.searchActivatedUsersByParam);
router.post('/', UserController.store);
router.put('/:id', UserController.updateById);
router.delete('/:id', UserController.delete);
router.put('/activate/:id', UserController.updateById);

module.exports = router;
