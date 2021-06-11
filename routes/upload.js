const express = require('express');

const router = express.Router();
const UploadController = require('../controllers/UploadController');
const authenticationRequired = require('../middlewares/authenticationRequired');
const fileUpload = require('../middlewares/fileUpload');

router.post('/', authenticationRequired, fileUpload.single('file'), UploadController.upload);

module.exports = router;
