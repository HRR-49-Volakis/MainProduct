const { cassandra, mongo, postgress } = require('../../database');

exports.postgressExecute = (req, res, next) => {
  postgress.getInstance();
  res.status(200).send({ message: 'connected postgress' });
};
exports.cassandraExecute = (req, res, next) => {
  cassandra.getInstance();
  res.status(200).send({ message: 'connected cassandra' });
};
exports.mongoExecute = (req, res, next) => {
  mongo.getInstance();
  res.status(200).send({ message: 'connected mongo' });
};