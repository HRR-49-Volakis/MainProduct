const express = require('express');
const router = express.Router();
const ProductController = require('../controller/ProductController');

router.get('/main/:productId', ProductController.productById);

module.exports = router;