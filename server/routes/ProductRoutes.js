const express = require('express');
const router = express.Router();
const { ProductController } = require('../controller');

router.get('/:id', ProductController.productById);

module.exports = router;