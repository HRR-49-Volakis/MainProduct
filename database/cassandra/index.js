const cassandra = require('cassandra-driver');
const { UserModel, ProductModel } = require('../cassandra/model');

const client = new cassandra.Client({
  contactPoints: ['127.0.0.1'],
  localDataCenter: 'datacenter1',
  keyspace: 'ikea'
});

const getInstance = () => {
  client.connect()
    .then(result => {
      setDB('cassandra');
      console.log('connected cassandra');
    })
    .catch(e => {
      console.log('there was an error ', e);
      clearDB();
    });
};

const shutDownInstance = () => {
  return client.shutDown;
};

module.exports.client = client;
module.exports.UserModel = UserModel;
module.exports.getInstance = getInstance;
module.exports.ProductModel = ProductModel;
module.exports.shutDownInstance = shutDownInstance;