const express = require('express');

const router = express.Router();
const GroupController = require('../controllers/GroupController');

router.get('/', GroupController.listAllGroups);
router.get('/search', GroupController.searchGroupByParam);
router.post('/', GroupController.store);
router.post('/join', GroupController.joinGroup);
router.post('/leave', GroupController.leaveGroup);
router.delete('/:id', GroupController.delete);
router.put('/:id', GroupController.updateById);

module.exports = router;
