const invalidUserFields = (req, res, next) => {
  const { user } = req.body;
  if (user === undefined || Object.keys(user).length < 10 || Object.values(user).some(value => value === 'undefined')) {
    res.status(404).send({ message: 'error specifying valid user fields' });
  } else {
    next();
  }
};

module.exports.invalidUserFields = invalidUserFields;