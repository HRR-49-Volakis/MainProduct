const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  userId: { type: Number, required: true, dropDups: true },
  name: { type: String, required: true },
  last: { type: String: required: true },
  user: { type: String, required: true },
  sex: { type: String, required: true },
  email: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zip: { type: String, required: true },
  create_date: { type: Date, required: true },
  update_date: { type: Date, required: true }
});

module.exports = new mongoose.model('User', userSchema);