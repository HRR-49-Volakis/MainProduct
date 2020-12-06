const { Pool, Client } = require('pg');
const connectionString = 'postgres://giovanirubini:Gvr23@localhost:5432/ikea';
const { UserModel, ProductModel } = require('./model');

const client = new Client({
  connectionString
});

const getInstance = () => {

  setDB('postgress');
  console.log('connected postgress')
  return client.connect();
};

const shutDownInstance = () => {
  clearDB();
  return client.end();
};

module.exports.client = client;
module.exports.UserModel = UserModel;
module.exports.getInstance = getInstance;
module.exports.ProductModel = ProductModel;
module.exports.shutDownInstance = shutDownInstance;

