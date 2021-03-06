const express = require('express');

const router = express.Router();
const GroupController = require('../controllers/GroupController');

router.get('/', GroupController.listAllGroups);
router.post('/join', GroupController.joinGroup);
router.post('/', GroupController.store);
router.delete('/:id', GroupController.delete);
router.put('/:id', GroupController.updateById);

module.exports = router;