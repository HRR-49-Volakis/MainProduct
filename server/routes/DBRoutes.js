const express = require('express');
const router = express.Router();
const { DBController } = require('../controller');

router.get('/postgress', DBController.postgressExecute);
router.get('/cassandra', DBController.cassandraExecute);
router.get('/mongo', DBController.mongoExecute);

module.exports = router;