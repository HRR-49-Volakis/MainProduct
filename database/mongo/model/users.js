const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  userId: { type: Number, required: true, unique: true, dropDups: true },
  name: { type: String, required: true },
  last: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  sex: { type: String, required: true },
  email: { type: String, required: true, unique: true, dropDups: true },
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

const logIn = ({ username, password }) => {
  return UserModel.findOne({ username, password }, { _id: 0, __v: 0 })
    .then(result => result)
    .catch(e => console.log('error at sign in in mongo'));
};
const updateUser = (user) => UserModel.findOneAndUpdate({ username: user.username, password: user.password }, user);
const deleteUser = ({ username, password }) => UserModel.deleteOne({ username, password });


module.exports.logIn = logIn;
module.exports.createUser = createUser;
module.exports.updateUser = updateUser;
module.exports.deleteUser = deleteUser;