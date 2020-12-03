const express = require('express');
const router = express.Router();
const { UserController } = require('../controller');

router.post('/create', UserController.signUp);
router.post('/login', UserController.logIn);
router.put('/update', UserController.updateAccount);
router.delete('/delete', UserController.deleteAccount);

module.exports = router;