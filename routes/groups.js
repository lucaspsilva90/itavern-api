var express = require('express');
var router = express.Router();
const GroupController = require('../controllers/GroupController');

router.get('/', GroupController.list);
router.post('/', GroupController.store);


module.exports = router;