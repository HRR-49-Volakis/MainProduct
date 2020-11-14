const express = require('express');
const app = express();
const productsDB = require('../database/products.js');
const bodyParser = require('body-parser');
const fs = require('file-system');

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/products/:productId', async function(req, res) {
  let products = await productsDB.ProductModel.findOne({'productId': req.params.productId});
  res.status(200).send(products);
});

app.post('/api/products', async function(req, res) {
  let response = await productsDB.ProductModel.create(req.body);
  res.status(200).send(response);
});

module.exports = app;