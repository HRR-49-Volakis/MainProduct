const express = require('express');
const router = express.Router();
const { UserController } = require('../controller');

router.post('/create', UserController.signUp);

module.exports = router;