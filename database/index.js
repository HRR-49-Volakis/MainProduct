const mongo = require('./mongo');
const postgress = require('./postgress');
const cassandra = require('./cassandra');

db = '';

const setDB = (database) => db = database;
const clearDB = () => db = '';


module.exports = {
  mongo,
  postgress,
  cassandra,
};

global.db = db;
global.setDB = setDB;
global.clearDB = clearDB;
