const express = require('express');

const router = express.Router();
const meetingController = require('../controllers/MeetingController');

router.get('/', meetingController.listAll);
router.post('/', meetingController.store);
router.put('/:id', meetingController.updateById);
router.delete('/:id', meetingController.delete);

module.exports = router;
