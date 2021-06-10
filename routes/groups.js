const express = require('express');

const router = express.Router();
const authenticationRequired = require('../middlewares/authenticationRequired');
const GroupController = require('../controllers/GroupController');

router.get('/', authenticationRequired, GroupController.listAllGroups);
router.get('/search', authenticationRequired, GroupController.searchGroupByParam);
router.post('/', authenticationRequired, GroupController.store);
router.post('/join', authenticationRequired, GroupController.joinGroup);
router.post('/leave', authenticationRequired, GroupController.leaveGroup);
router.delete('/:id', authenticationRequired, GroupController.delete);
router.put('/:id', authenticationRequired, GroupController.updateById);

module.exports = router;
