const express = require('express');

const router = express.Router();
const GroupController = require('../controllers/GroupController');

router.get('/', GroupController.listAllGroups);
router.post('/join', GroupController.joinGroup);
router.post('/', GroupController.store);

module.exports = router;