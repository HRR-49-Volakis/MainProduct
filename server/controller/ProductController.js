const express = require('express');
const {
  ProductsModel
} = require('../../database/model');


exports.productById = (req, res, next) => {
  const productId = (req.params.productId && req.params.productId !== '') ? req.params.productId : 2;
  ProductsModel.getProductById(productId)
    .then(products => res.status(200).send(products))
    .catch(error => {
      console.log('error getting the product by id ', error);
      res.status(404).send();
    });
};