const express = require('express');
const UserController = require('../controllers/UserController');

const router = express.Router();

router.get('/', UserController.list);
router.get('/search', UserController.searchActivatedUsersByParam);
router.post('/', UserController.store);
router.put('/:id', UserController.updateById);
router.put('/activate/:id', UserController.userActivate);
router.delete('/:id', UserController.delete);

module.exports = router;
