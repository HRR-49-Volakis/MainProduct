const path = require('path');
const mongoose = require('mongoose');


const getInstance = () => {
  mongoose.connect('mongodb://localhost/ikea', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then(result => console.log('connected '))
    .catch(err => console.log('connection error ', err));
};

const shutDownInstance = () => {
  mongoose.connection.close();
};

module.exports = {
  getInstance,
  shutDownInstance
};

