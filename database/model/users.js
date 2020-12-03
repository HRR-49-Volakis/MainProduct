const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  userId: { type: Number, required: true, unique: true, dropDups: true },
  name: { type: String, required: true },
  last: { type: String, required: true },
  username: { type: String, required: true },
  sex: { type: String, required: true },
  email: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zip: { type: String, required: true },
  created_date: { type: String, required: true },
  update_date: { type: Date, default: null }
});

userSchema.index({ userId: 1 });

const UserModel = new mongoose.model('User', userSchema);

const createUser = (user) => {
  if (!user) return user;

  const newUser = new UserModel({ ...user });
  return newUser.save();
};



module.exports.createUser = createUser;