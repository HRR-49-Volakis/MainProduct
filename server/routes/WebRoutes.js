const express = require('express');
const router = express.Router();
const { WebController } = require('../controller');

router.get('*/:id', WebController.getIndex);

module.exports = router;