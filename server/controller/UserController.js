const { mongo, cassandra, postgress } = require('../../database');

let userAction;
let message;
let messageError;

exports.signUp = (req, res, next) => {
  const { user = null } = req.body;
  if (db === 'mongo') {
    userAction = mongo.UserModel.createUser;
  } else if (db === 'postgress') {
    userAction = postgress.UserModel.createAccount;
  } else if (db === 'cassandra') {
    userAction = cassandra.UserModel.createMember;
  }
  userAction(user)
    .then(result => res.status(200).send({ message: `${db} user created successfuly` }))
    .catch(e => {
      console.log('error creating a user ', e);
      res.status(404).send({ message: `error creating a user in ${db}` });
    });
};
exports.logIn = (req, res, next) => {
  const { username = '', password = '' } = req.body;
  if (db === 'mongo') {
    userAction = mongo.UserModel.LogIn;
  } else if (db === 'postgress') {
    userAction = postgress.UserModel.signIn;
  } else if (db === 'cassandra') {
    userAction = cassandra.UserModel.getMember;
  }
  userAction({ username, password })
    .then(result => res.status(200).send({ message: 'logged in' }))
    .catch(e => {
      console.log('error is user creation ', e);
      res.status(404).send({ message: `${db} user does not exist` });
    });
};
exports.updateAccount = (req, res, next) => {
  const { user = {} } = req.body;
  let id = -1;
  if (db === 'mongo') {
    userAction = mongo.UserModel.updateUser;
  } else if (db === 'postgress') {
    // TODO: test this from the front end
    userAction = postgress.UserModel.updateAccount;
  }
  if (db === 'cassandra') {
    userAction = cassandra.UserModel.updateMember;
    cassandra.UserModel.getMemberId({ username: user.username, password: user.password })
      .then(result => {
        if (!result.rowLength) {
          throw result;
        }
        user.id = result.rows[0].id;
        userAction(user)
          .then(result => res.status(200).send({ message: 'account was updated' }))
          .catch(e => {
            console.log(e);
            res.status(404).send({ message: `${db} user does not exist` });
          });
      })
      .catch(e => {
        console.log(e);
        res.status(404).send({ message: `${db} user does not exist` });
      });
  } else if (db !== '') {
    userAction(user)
      .then(result => res.status(200).send({ message: 'account was updated' }))
      .catch(e => {
        console.log(e);
        res.status(404).send({ message: `${db} user does not exist` });
      });
  }
};
exports.deleteAccount = (req, res, next) => {
  const { username = '', password = '' } = req.body;
  if (db === 'mongo') {
    userAction = UserModel.deleteUser;
  } else if (db === 'postgress') {
    userAction = postgress.UserModel.deleteAccount;
  }
  if (db === 'cassandra') {
    userAction = cassandra.UserModel.deleteMember;
    cassandra.UserModel.getMemberId({ username, password })
      .then(result => {
        if (!result.rowLength) {
          throw result;
        }
        const id = result.rows[0].id;
        userAction(id)
          .then(result => {
            if (result.rowCount <= 0) {
              throw result;
            }
            res.status(200).send({ message: 'account was deleted' });
          })
          .catch(e => {
            console.log('error deleting a member');
            res.status(404).send({ message: `${db} user does not exist` });
          });
      })
      .catch(e => {
        console.log(e);
        res.status(404).send({ message: `${db} user does not exist` });
      });
  } else if (db !== '') {
    userAction({ username, password })
      .then(result => {
        if (result.rowCount <= 0) {
          throw result;
        }
        res.status(200).send({ message: 'account was deleted' });
      })
      .catch(e => {
        console.log('error deleting a member');
        res.status(404).send({ message: `${db} user does not exist` });
      });
  }
};