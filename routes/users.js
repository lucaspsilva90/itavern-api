const express = require('express');
const UserController = require('../controllers/UserController');
const authenticationRequired = require('../middlewares/authenticationRequired');

const router = express.Router();

router.get('/', authenticationRequired, UserController.list);
router.get('/search', authenticationRequired, UserController.searchActivatedUsersByParam);
router.post('/', UserController.store);
router.put('/:id', authenticationRequired, UserController.updateById);
router.put('/activate/:id', UserController.userActivate);
router.delete('/:id', authenticationRequired, UserController.delete);

module.exports = router;
