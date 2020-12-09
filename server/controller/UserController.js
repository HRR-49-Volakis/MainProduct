const { mongo, cassandra, postgress } = require('../../database');


exports.signUp = (req, res, next) => {
  const { user = null } = req.body;
  if (db === 'mongo') {
    mongo.UserModel.createUser(user)
      .then(result => {
        res.status(200).send({ message: 'user created successfuly' });
      })
      .catch(e => {
        console.log('error creating a user ', e);
        res.status(404).send({ message: git });
      });
  } else if (db === 'postgress') {
    postgress.createAccount(user)
      .then(result => {
        res.status(200).send({ message: 'user created successfuly' });
      })
      .catch(e => {
        console.log('error creating a user ', e);
        res.status(404).send({ message: git });
      });
  } else if (db === 'cassandra') {
    cassandra.UserModel.createMember(user)
      .then(result => {
        if (result.rows.length > 0) {
          res.status(200).send(result.rows);
        } else {
          res.status(404).send({ message: 'error with updating a member' });
        }
      })
      .catch(e => {
        console.log('error in cassandra ', e);
        res.status(404).send({ message: 'error with updating a member' });
      });
  }
};
exports.logIn = (req, res, next) => {
  const { username = '', password = '' } = req.body;
  if (db === 'mongo') {
    mongo.UserModel.logIn({ username, password })
      .then(result => {
        if (!result) {
          throw result;
        }
        res.status(200).send({ message: 'logged in' });
      })
      .catch(e => {
        console.log(e);
        res.status(404).send({ message: "user does not exist" });
      });
  } else if (db === 'postgress') {
    postgress.signIn({ username, password })
      .then(result => {
        if (!result) {
          throw result;
        }
        res.status(200).send({ message: 'logged in' });
      })
      .catch(e => {
        console.log(e);
        res.status(404).send({ message: "user does not exist" });
      });
  } else if (db === 'cassandra') {
    cassandra.UserModel.getMember({ username, password })
      .then(result => {
        if (result.rows.length > 0) {
          res.status(200).send(result.rows);
        } else {
          res.status(404).send({ message: 'error with login member' });
        }
      })
      .catch(e => {
        console.log('error in cassandra ', e);
        res.status(404).send({ message: 'error with login member' });
      });
  }

};
exports.updateAccount = (req, res, next) => {
  const { user = {} } = req.body;
  if (db === 'mongo') {
    mongo.UserModel.updateUser(user)
      .then(result => {
        if (!result) {
          throw result;
        }
        res.status(200).send({ message: 'account was updated' });
      })
      .catch(e => {
        console.log(e);
        res.status(404).send({ message: "user does not exist" });
      });
  } else if (db === 'postgress') {
    postgress.updateAccount(user)
      .then(result => {
        if (!result) {
          throw result;
        }
        res.status(200).send({ message: 'account was updated' });
      })
      .catch(e => {
        console.log(e);
        res.status(404).send({ message: "user does not exist" });
      });
  } else if (db === 'cassandra') {
    cassandra.UserModel.updateMember(productId)
      .then(result => {
        if (result.rows.length > 0) {
          res.status(200).send(result.rows);
        } else {
          res.status(404).send({ message: 'error with updating a member' });
        }
      })
      .catch(e => {
        console.log('error in cassandra ', e);
        res.status(404).send({ message: 'error with updating a member' });
      });
  }

};
exports.deleteAccount = (req, res, next) => {
  const { username = '', password = '' } = req.body;
  if (db === 'mongo') {
    UserModel.deleteUser({ username, password })
      .then(result => {
        console.log('the result ', result)
        if (!result.deletedCount) {
          throw result;
        }
        res.status(200).send({ message: 'account was deleted' });
      })
      .catch(e => {
        console.log(e);
        res.status(404).send({ message: "user does not exist" });
      });
  } else if (db === 'postgress') {
    postgress.deleteAccount({ username, password })
      .then(result => {
        console.log('the result ', result)
        if (!result.deletedCount) {
          throw result;
        }
        res.status(200).send({ message: 'account was deleted' });
      })
      .catch(e => {
        console.log(e);
        res.status(404).send({ message: "user does not exist" });
      });
  } else if (db === 'cassandra') {
    cassandra.UserModel.deleteMember(productId)
      .then(result => {
        if (result.rows.length > 0) {
          res.status(200).send(result.rows);
        } else {
          res.status(404).send({ message: 'error with deleting the member' });
        }
      })
      .catch(e => {
        console.log('error in cassandra ', e);
        res.status(404).send({ message: 'error with deleting the member' });
      });
  }
};