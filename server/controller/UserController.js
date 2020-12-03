const express = require('express');
const {
  UserModel
} = require('../../database/model');


exports.signUp = (req, res, next) => {
  const { user = null } = req.body;
  UserModel.createUser(user)
    .then(result => {
      console.log(result);
    })
    .catch(e => {
      console.log('error creating a user ', e);
      res.status(404).send({ message: 'error in the creation' });
    });
};