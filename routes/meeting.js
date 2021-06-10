const express = require('express');

const router = express.Router();
const meetingController = require('../controllers/MeetingController');
const authenticationRequired = require('../middlewares/authenticationRequired');

router.get('/', authenticationRequired, meetingController.listAll);
router.post('/', authenticationRequired, meetingController.store);
router.put('/:id', authenticationRequired, meetingController.updateById);
router.delete('/:id', authenticationRequired, meetingController.delete);

module.exports = router;
