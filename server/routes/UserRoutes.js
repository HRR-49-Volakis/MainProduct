const express = require('express');
const router = express.Router();
const { UserController } = require('../controller');
const { UserMiddleware } = require('../middleware');

router.post('/login', UserController.logIn);
router.delete('/delete', UserController.deleteAccount);

router.use('*', UserMiddleware.invalidUserFields);
router.post('/create', UserController.signUp);
router.put('/update', UserController.updateAccount);

module.exports = router;