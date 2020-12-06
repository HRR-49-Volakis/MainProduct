const path = require('path');
const mongoose = require('mongoose');
const { UserModel, ProductModel } = require('./model');


const getInstance = () => {
  mongoose.connect('mongodb://localhost/ikea', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then(result => {
      console.log('connected mongo');
      setDB('mongo');
    })
    .catch(err => console.log('connection error ', err));
};

const shutDownInstance = () => {
  clearDB();
  mongoose.connection.close();
};

module.exports.UserModel = UserModel;
module.exports.getInstance = getInstance;
module.exports.ProductModel = ProductModel;
module.exports.shutDownInstance = shutDownInstance;

