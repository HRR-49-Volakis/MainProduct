const express = require('express');
const {
  UserModel
} = require('../../database/mongo/model');


exports.signUp = (req, res, next) => {
  const { user = null } = req.body;
  UserModel.createUser(user)
    .then(result => {
      res.status(200).send({ message: 'user created successfuly' });
    })
    .catch(e => {
      console.log('error creating a user ', e);
      res.status(404).send({ message: git });
    });
};
exports.logIn = (req, res, next) => {
  const { username = '', password = '' } = req.body;

  UserModel.logIn({ username, password })
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
};
exports.updateAccount = (req, res, next) => {
  const { user = {} } = req.body;
  UserModel.updateUser(user)
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
};
exports.deleteAccount = (req, res, next) => {
  const { username = '', password = '' } = req.body;
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
};